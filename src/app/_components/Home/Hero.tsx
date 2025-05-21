'use client'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei"

export default function Hero() {
    return (
        <section className="w-full h-screen">
            <Canvas>
                <Environment preset='studio'/>
                <OrbitControls />
                <boxGeometry />
            </Canvas>
        </section>
    )
}