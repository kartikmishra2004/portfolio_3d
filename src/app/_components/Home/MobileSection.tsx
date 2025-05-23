'use client'
import { Canvas } from "@react-three/fiber"
import Iphone from '../../../../public/assets/3d_models/iphone/Iphone'
import { Environment } from "@react-three/drei"

export default function MobileSection() {
    return (
        <section id="mobile-section" className='w-full relative h-screen overflow-visible bg-gradient-to-br from-background via-accent to-background'>
            <div className="absolute saturate-0 w-full h-screen z-40">
                <Canvas>
                    <Environment files="/assets/3d_models/iphone/blue_photo_studio_2k.exr" />
                    <Iphone />
                </Canvas>
            </div>
            <div className="absolute w-[40%] flex pt-14 flex-col h-screen left-0">
                <div className="overflow-hidden w-max pr-4">
                    <h1 className="text-[20rem] text-foreground/80 leading-none font-extrabold tracking-normal">MY</h1>
                </div>
                <div className="overflow-hidden w-max">
                    <h1 className="text-[11rem] text-foreground/80 leading-none font-extrabold tracking-tighter">Vision</h1>
                </div>
            </div>
            <div className="absolute w-[60%] flex flex-col pt-24 items-end h-[40%] right-0 top-0">
                <div className="overflow-hidden w-max pr-4">
                    <h1 className="text-[9.4rem] text-foreground/80 leading-none font-extrabold tracking-tighter">DESIGNING</h1>
                </div>
            </div>
            <div className="absolute w-[60%] flex justify-end h-[60%] right-0 bottom-0">
                <h3 className="text-4xl pt-10 leading-none tracking-wider w-[70%] text-muted-foreground/50 underline">smooth, intuitive interfaces that feel native and effortless on every mobile screen.</h3>
            </div>

        </section>
    )
}