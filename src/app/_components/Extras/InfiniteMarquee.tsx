import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCursor } from "@/app/_context/Cursor";

gsap.registerPlugin(ScrollTrigger);

const InfiniteMarquee = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { scaleUp, setColor, reset } = useCursor();
    const technologies = [
        'HTML',
        'CSS',
        'JAVASCRIPT',
        'REACT',
        'GSAP',
        'THREEJS',
        'TYPESCRIPT',
        'NEXTJS'
    ];

    useGSAP(() => {
        gsap.to(contentRef.current, {
            scrollTrigger: {
                trigger: '#project-teaser-section',
                start: 'top -100%',
            },
            x: -1500,
            duration: 60,
            ease: 'none',
        });
    }, []);

    return (
        <div onMouseLeave={() => reset()} onMouseEnter={() => { scaleUp(3); setColor("#ffffff") }} className="w-full" ref={containerRef}>
            <div ref={contentRef} className="flex whitespace-nowrap">
                {[...Array(40)].map((_, index) =>
                    technologies.map((tech, techIndex) => (
                        <div key={`tech-${index}-${techIndex}`} className="inline-flex items-center">
                            <span className="text-4xl font-bold text-foreground/80">{tech}</span>
                            <div className="w-2 h-2 mx-10 bg-foreground/80 rounded-full"></div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default InfiniteMarquee;
