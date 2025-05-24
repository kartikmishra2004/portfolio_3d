'use client'
import { Canvas } from "@react-three/fiber"
import Iphone from '../../../../public/assets/3d_models/iphone/Iphone'
import { Environment } from "@react-three/drei"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { useCursor } from "@/app/_context/Cursor";

gsap.registerPlugin(ScrollTrigger);

export default function MobileSection() {
    const { scaleUp, scaleDown, setColor, reset } = useCursor();
    const mobileSectionRef = useRef(null);
    const mRef = useRef(null);
    const yRef = useRef(null);
    const visionRef = useRef(null);
    const designingRef = useRef(null);
    const p1 = 'smooth, intuitive interfaces that';
    const p2 = 'feel native and effortless on';
    const p3 = 'every mobile screen.';
    const spanRefs1 = useRef<(HTMLSpanElement | null)[]>([]);
    const spanRefs2 = useRef<(HTMLSpanElement | null)[]>([]);
    const spanRefs3 = useRef<(HTMLSpanElement | null)[]>([]);
    const buttonRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mobileSectionRef.current,
                start: '+=4000',
                end: '+=4000',
                scrub: true,
            }
        });

        tl.from(mRef.current, {
            x: -300,
            ease: 'power4.out',
            opacity: 0,
        }, 'x');

        tl.from(yRef.current, {
            x: -300,
            ease: 'power4.out',
            opacity: 0,
        }, 'x');

        tl.from(visionRef.current, {
            y: 180,
            ease: 'power4.out',
            rotateZ: 5,
        });

        tl.from(designingRef.current, {
            y: 180,
            ease: 'power4.out',
            rotateZ: 5,
        });

        tl.fromTo([spanRefs1.current, spanRefs2.current, spanRefs3.current], {
            color: '#27272a',
            y: 17,
            opacity: 0,
        }, {
            color: '#7b7b83',
            stagger: 0.05,
            ease: 'power4.out',
            y: 0,
            opacity: 1,
        });

        tl.from(buttonRef.current, {
            opacity: 0,
            ease: 'power4.out',
        });
    });

    return (
        <section id="mobile-section" className='w-full relative h-screen overflow-visible bg-gradient-to-br from-background via-accent to-background'>
            <div ref={mobileSectionRef} className="absolute saturate-0 w-full h-screen z-40 pointer-events-none">
                <Canvas style={{ pointerEvents: 'none' }}>
                    <Environment files="/assets/3d_models/iphone/blue_photo_studio_2k.exr" />
                    <Iphone />
                </Canvas>
            </div>
            <div className="absolute w-[40%] flex pt-14 flex-col h-screen left-0">
                <div className="flex">
                    <div className="overflow-hidden w-max flex">
                        <h1 onMouseLeave={() => reset()} onMouseEnter={() => { scaleUp(5.5); setColor("#ffffff") }} ref={mRef} className="text-[18rem] text-foreground/80 leading-none font-extrabold tracking-normal">M</h1>
                    </div>
                    <div className="overflow-hidden w-max flex">
                        <h1 onMouseLeave={() => reset()} onMouseEnter={() => { scaleUp(5.5); setColor("#ffffff") }} ref={yRef} className="text-[18rem] text-foreground/80 leading-none font-extrabold tracking-normal">Y</h1>
                    </div>
                </div>
                <div className="overflow-hidden w-max">
                    <h1 onMouseLeave={() => reset()} onMouseEnter={() => { scaleUp(5.5); setColor("#ffffff") }} ref={visionRef} className="text-[11rem] text-foreground/80 leading-none font-extrabold tracking-tighter">Vision</h1>
                </div>
            </div>
            <div className="absolute w-[60%] flex flex-col pt-24 items-end h-[35%] right-0 top-0">
                <div className="overflow-hidden w-max pr-4">
                    <h1 onMouseLeave={() => reset()} onMouseEnter={() => { scaleUp(5.5); setColor("#ffffff") }} ref={designingRef} className="text-[9.4rem] text-foreground/80 leading-none italic font-extrabold tracking-tighter">DESIGNING</h1>
                </div>
            </div>
            <div className="absolute w-[60%] flex flex-col items-end h-[65%] right-0 bottom-0 z-50">
                <p onMouseLeave={() => reset()} onMouseEnter={() => { scaleUp(3); setColor("#ffffff") }} className="text-3xl pt-10 tracking-wider w-[70%] text-muted underline">
                    {
                        p1.split('').map((item, index) => (<span className={`inline-block ${item === ' ' ? '' : 'underline'}`} ref={(el) => { spanRefs1.current[index] = el }} key={index}>{item === ' ' ? '\u00A0' : item}</span>))
                    } <br />
                    {
                        p2.split('').map((item, index) => (<span className={`inline-block ${item === ' ' ? '' : 'underline'}`} ref={(el) => { spanRefs2.current[index] = el }} key={index}>{item === ' ' ? '\u00A0' : item}</span>))
                    } <br />
                    {
                        p3.split('').map((item, index) => (<span className={`inline-block ${item === ' ' ? '' : 'underline'}`} ref={(el) => { spanRefs3.current[index] = el }} key={index}>{item === ' ' ? '\u00A0' : item}</span>))
                    }
                </p>
                <div ref={buttonRef} className="flex gap-2 pt-6 w-[70%]">
                    <Link href={'/contact'}>
                        <Button size={"lg"} className="cursor-pointer">
                            Hire me
                        </Button>
                    </Link>
                    <Link href={'/projects'}>
                        <Button variant={'outline'} size={"lg"} className="cursor-pointer">
                            Explore projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}