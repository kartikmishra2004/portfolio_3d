'use client'
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'
import { useCursor } from "@/app/_context/Cursor";

export default function ProjectCylinder() {
    const { scaleUp, setColor, reset, setInnerContent, setStyle } = useCursor();
    const tex = useTexture('/assets/images/best-projects.png');
    const cylRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (cylRef.current) {
            cylRef.current.rotation.y += delta / 2;
        }
    });

    return (
        <group onPointerOver={() => { scaleUp(3); setColor('#ffffff'); setInnerContent('<span style="font-size: 4px; color: black;">DRAG TO MOVE</span>'); setStyle({ mixBlendMode: 'normal' }); }} onPointerOut={() => reset()} rotation={[0, 1.4, 0.4]}>
            <mesh ref={cylRef}>
                <cylinderGeometry args={[2.25, 2.25, 2.25, 60, 60, true]} />
                <meshStandardMaterial metalness={1} roughness={0.1} transparent map={tex} side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}