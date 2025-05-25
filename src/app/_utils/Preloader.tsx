'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react"

export default function Preloader() {

    const [loading, setLoading] = useState(true);
    const mainRef = useRef(null);
    const spinnerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            document.body.style.position = "static";
        }, 3000);
    }, [loading]);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(spinnerRef.current, {
            opacity: 0,
            delay: 1.5
        }, 'x')

        tl.to(textRef.current, {
            opacity: 0,
            delay: 1.5
        }, 'x')

        tl.to(mainRef.current, {
            transform: "translateX(100%)",
            ease: 'power4.inOut',
            duration: 1,
        })
    })

    if (loading) {
        return (
            <div ref={mainRef} className='h-screen w-full fixed z-[9999] bg-background flex flex-col gap-3 justify-center items-center'>
                <div ref={spinnerRef} className="w-8 h-8 border-muted-foreground border-t animate-spin rounded-full"></div>
                <h1 ref={textRef} className="font-semibold text-foreground/60">LOADING</h1>
            </div>
        )
    } else {
        return null;
    }
};