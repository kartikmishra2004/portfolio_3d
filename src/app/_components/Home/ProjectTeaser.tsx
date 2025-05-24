'use client'
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import ProjectCylinder from "./ProjectCylinder";

function AutoReturnControls() {
    const controlsRef = useRef<any>(null);

    useFrame(() => {
        if (controlsRef.current) {
            controlsRef.current.object.position.lerp({ x: 0, y: 0, z: 5 }, 0.05);
            const euler = controlsRef.current.object.rotation;
            euler.x *= 0.98;
            euler.z *= 0.98;
        }
    });

    return (
        <OrbitControls
            ref={controlsRef}
            rotateSpeed={0.1}
            enableZoom={false}
            enablePan={false}
        />
    );
}

export default function ProjectTeaser() {
    return (
        <section className="w-full h-[95vh] bg-gradient-to-br from-accent via-background to-accent">
            <Canvas camera={{ fov: 75, position: [0, 0, 5] }} className="contrast-[90%]">
                <AutoReturnControls />
                <Environment files={'/assets/images/cyclorama_hard_light_2k.exr'} />
                <ProjectCylinder />
            </Canvas>
        </section >
    )
}