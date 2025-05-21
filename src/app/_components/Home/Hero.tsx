'use client'
import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words"
import Link from "next/link"

export default function Hero() {
    const words = ["TypeScript: Typed to perfection.", "THREE.js: 3D made simple.", "GSAP: Animate anything, fast.", "NEXT.js: Go full-stack, fast."];
    return (
        <section className="w-full h-screen">
            <AuroraBackground>
                <div className="w-full z-0 h-screen flex flex-col gap-8 px-40 justify-center">
                    <div>
                        <h1 className="text-9xl font-extrabold text-foreground/80 tracking-tighter">KARTIK MISHRA</h1>
                        <div className="text-3xl mb-3">
                            <FlipWords words={words} />
                        </div>
                        <p className="text-muted-foreground/70 mt-6 text-sm tracking-widest w-1/2 font-semibold">Turning ideas into interactive web experiences. Clean code. Sleek design. Seamless performance.</p>
                    </div>
                    <div className="w-full flex gap-2">
                        <Link href={'/projects'}>
                            <Button size={"lg"} className="cursor-pointer">
                                View My Work
                            </Button>
                        </Link>
                        <Link href={'/contact'}>
                            <Button variant={'secondary'} size={"lg"} className="cursor-pointer">
                                Get In Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </AuroraBackground>
        </section>
    )
}