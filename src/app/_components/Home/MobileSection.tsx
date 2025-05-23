'use client'
import { Canvas } from "@react-three/fiber"
import Iphone from '../../../../public/assets/3d_models/iphone/Iphone'
import { Environment } from "@react-three/drei"

export default function MobileSection() {
    return (
        <section id="mobile-section" className='w-full relative h-screen overflow-visible bg-gradient-to-br from-background via-accent to-background'>
            <div className="absolute w-full h-screen z-40">
                <Canvas>
                    <Environment preset="studio" />
                    <Iphone />
                </Canvas>
            </div>
        </section>
    )
}