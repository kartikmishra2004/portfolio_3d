'use client'
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Macbook from '../../../../public/Macbook'

export default function Projects() {
    return (
        <section id="scroll-section" className='w-full h-[100vh] overflow-visible bg-gradient-to-br from-accent via-background to-background'>
            <Canvas>
                <Environment preset="studio" />
                <Macbook />
            </Canvas>
        </section>
    )
}