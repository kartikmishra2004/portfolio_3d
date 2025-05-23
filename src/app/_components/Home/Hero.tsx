'use client'
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

let hasGloballyAnimated = false;

export default function Hero() {
    const words = ["TypeScript: Typed to perfection.", "THREE.js: 3D made simple.", "GSAP: Animate anything, fast.", "NEXT.js: Go full-stack, fast."];
    const titleRef = useRef(null);
    const fliptextRef = useRef(null);
    const description1Ref = useRef(null);
    const description2Ref = useRef(null);
    const buttonRef = useRef(null);

    useGSAP(() => {
        if (!hasGloballyAnimated) {
            gsap.from(titleRef.current, {
                y: 250,
                ease: 'power4.out',
                duration: 1.5,
                rotateZ: 5,
                delay: 3,
            });
            gsap.from(fliptextRef.current, {
                y: 100,
                ease: 'power4.out',
                duration: 1.5,
                delay: 3.7,
                rotateZ: 5,
            });
            gsap.from(description1Ref.current, {
                y: 50,
                ease: 'power4.out',
                duration: 1.5,
                delay: 4,
                rotateZ: 5,
            });
            gsap.from(description2Ref.current, {
                y: 50,
                ease: 'power4.out',
                duration: 1.5,
                delay: 4,
                rotateZ: 5,
            });
            gsap.from(buttonRef.current, {
                opacity: 0,
                duration: 1.5,
                ease: 'power4.out',
                delay: 4.5,
            });
            
            hasGloballyAnimated = true;
        } else {
            gsap.set([titleRef.current, fliptextRef.current, description1Ref.current, description2Ref.current], {
                y: 0,
                rotateZ: 0
            });
            gsap.set(buttonRef.current, {
                opacity: 1
            });
        }
    });

    return (
        <section>
            <div className="w-full z-0 h-[90vh] flex bg-gradient-to-br from-background via-accent to-background flex-col gap-8 px-40 justify-center">
                <div>
                    <div className="overflow-hidden">
                        <h1 ref={titleRef} className="text-9xl mt-[10vh] font-extrabold text-foreground/80 w-max tracking-tighter">KARTIK MISHRA</h1>
                    </div>
                    <div className="overflow-hidden">
                        <div ref={fliptextRef} className="text-3xl mb-3">
                            <FlipWords words={words} />
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <p ref={description1Ref} className="text-muted-foreground/70 mt-6 text-sm tracking-widest w-1/2 font-semibold">Turning ideas into interactive web experiences. Clean code. Sleek</p>
                    </div>
                    <div className="overflow-hidden">
                        <p ref={description2Ref} className="text-muted-foreground/70 text-sm tracking-wider w-1/2 font-semibold">design. Seamless performance.</p>
                    </div>
                </div>
                <div ref={buttonRef} className="w-full flex gap-2">
                    <Link href={'/projects'}>
                        <Button size={"lg"} className="cursor-pointer">
                            View My Work
                        </Button>
                    </Link>
                    <Link href={'/contact'}>
                        <Button variant={'outline'} size={"lg"} className="cursor-pointer">
                            Get In Touch
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}