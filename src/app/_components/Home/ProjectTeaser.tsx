'use client'
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import ProjectCylinder from "../Extras/ProjectCylinder";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InfiniteMarquee from "../Extras/InfiniteMarquee";

function AutoReturnControls() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <div id="project-teaser-section" className="h-[60vh] w-full">
                <Canvas camera={{ fov: 60, position: [0, 0, 5] }} className="contrast-[90%] brightness-110">
                    <AutoReturnControls />
                    <Environment files={'/assets/images/cyclorama_hard_light_2k.exr'} />
                    <ProjectCylinder />
                </Canvas>
            </div>
            <div className="h-[30vh] w-full pt-6">
                <div className="w-full flex justify-center py-4 gap-8">
                    <InfiniteMarquee />
                </div>
                <div className="flex flex-col justify-center gap-6 items-center">
                    <p className="text-muted-foreground/70 text-center mt-6 text-sm tracking-widest w-1/2 font-semibold">bringing ideas to life with code & creativity</p>
                    <div className="w-full flex justify-center gap-2">
                        <Link href={'/projects'}>
                            <Button size={"lg"} className="cursor-pointer">
                                Show me more →
                            </Button>
                        </Link>
                        <Link href={'/contact'}>
                            <Button variant={'outline'} size={"lg"} className="cursor-pointer">
                                Let’s Connect
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}