'use client'
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Macbook from '../../../../public/assets/3d_models/macbook/Macbook'
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

export default function DesktopSection() {

    const sectionRef = useRef(null);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const title3Ref = useRef(null);
    const textContainer1 = useRef(null);
    const textContainer2 = useRef(null);
    const p1 = 'elegant, high';
    const p2 = 'performance websites';
    const p3 = 'that deliver';
    const p4 = 'seamless experiences';
    const p5 = 'on large desktop';
    const p6 = 'displays.';
    const spanRefs1 = useRef<(HTMLSpanElement | null)[]>([]);
    const spanRefs2 = useRef<(HTMLSpanElement | null)[]>([]);
    const spanRefs3 = useRef<(HTMLSpanElement | null)[]>([]);
    const spanRefs4 = useRef<(HTMLSpanElement | null)[]>([]);
    const spanRefs5 = useRef<(HTMLSpanElement | null)[]>([]);
    const spanRefs6 = useRef<(HTMLSpanElement | null)[]>([]);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=4000',
                scrub: true,
            }
        })

        tl.from(title1Ref.current, {
            y: 160,
            ease: 'power4.out',
            rotateZ: 5,
        });

        tl.from(title2Ref.current, {
            y: 160,
            ease: 'power4.out',
            rotateZ: 5,
        });

        tl.from(title3Ref.current, {
            y: 160,
            ease: 'power4.out',
            rotateZ: 5,
        });

        tl.to(title1Ref.current, {
            fontSize: 120,
        }, 'x');

        tl.to(title2Ref.current, {
            fontSize: 120
        }, 'x');

        tl.to(title3Ref.current, {
            fontSize: 120
        }, 'x');

        tl.to(textContainer1.current, {
            justifyContent: 'start',
            paddingLeft: 20,
        }, 'x');

        tl.to(textContainer2.current, {
            paddingLeft: 50,
        }, 'x');

        tl.fromTo([spanRefs1.current, spanRefs2.current, spanRefs3.current, spanRefs4.current, spanRefs5.current, spanRefs6.current], {
            color: '#27272a',
            y: 17,
            opacity: 0,
        }, {
            color: '#7b7b83',
            stagger: 0.05,
            ease: 'power4.out',
            y: 0,
            opacity: 1,
        }, 'x');
    });

    return (
        <section id="desktop-section" className='w-full relative h-screen overflow-visible bg-gradient-to-br from-accent via-background to-accent'>
            <div ref={sectionRef} className="absolute saturate-0 w-full h-screen z-40 pointer-events-none">
                <Canvas style={{ pointerEvents: 'none' }}>
                    <Environment files={'/assets/3d_models/macbook/studio_small_08_2k.exr'} />
                    <Macbook />
                </Canvas>
            </div>
            <div ref={textContainer1} className="w-1/2 h-1/2 left-0 tracking-tighter mt-14 absolute flex justify-center items-center">
                <div className="overflow-hidden px-1 flex gap-8">
                    <h1 ref={title1Ref} className="text-[10rem] text-foreground/80 leading-none font-extrabold tracking-tighter">THIS</h1>
                    <h1 ref={title2Ref} className="text-[10rem] text-foreground/80 leading-none font-extrabold tracking-tighter">MIND</h1>
                </div>
            </div>
            <div ref={textContainer2} className="w-1/2 h-1/2 right-0 mt-14 absolute flex justify-center items-center">
                <div className="overflow-hidden px-1">
                    <h1 ref={title3Ref} className="text-[10rem] text-foreground/80 leading-none font-extrabold tracking-tighter">CREATE</h1>
                </div>
            </div>
            <div className="w-1/2 h-1/2 flex p-14 bottom-0 left-0 absolute">
                <p className="text-3xl w-[60%] tracking-wider">
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
            </div>
            <div className="w-1/2 h-1/2 flex justify-end p-14 bottom-0 right-0 absolute">
                <p className="text-3xl text-muted w-[60%] tracking-wider">
                    {
                        p4.split('').map((item, index) => (<span className={`inline-block ${item === ' ' ? '' : 'underline'}`} ref={(el) => { spanRefs4.current[index] = el }} key={index}>{item === ' ' ? '\u00A0' : item}</span>))
                    } <br />
                    {
                        p5.split('').map((item, index) => (<span className={`inline-block ${item === ' ' ? '' : 'underline'}`} ref={(el) => { spanRefs5.current[index] = el }} key={index}>{item === ' ' ? '\u00A0' : item}</span>))
                    } <br />
                    {
                        p6.split('').map((item, index) => (<span className={`inline-block ${item === ' ' ? '' : 'underline'}`} ref={(el) => { spanRefs6.current[index] = el }} key={index}>{item === ' ' ? '\u00A0' : item}</span>))
                    }
                </p>
            </div>
        </section>
    )
}