'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

export default function Cursor() {
    const cursorRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, { x: -100, y: -100 });

        const handleMouseMove = (event: MouseEvent) => {
            gsap.to(cursor, {
                x: event.clientX - 15,
                y: event.clientY - 10,
                ease: 'power4.out',
                duration: 1,
            });
        };

        const handleCursorHide = () => {
            gsap.to(cursor, {
                opacity: 0,
                ease: 'power4.out',
                duration: 1,
            });
        }

        const handleCursorShow = () => {
            gsap.to(cursor, {
                opacity: 1,
                ease: 'power4.out',
                duration: 1,
            });
        }

        const h1Enter = () => {
            gsap.to(cursor, {
                scale: 6,
                backgroundColor: '#ffffff'
            });
        };

        const h1Leave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'transparent'
            });
        };

        const pEnter = () => {
            gsap.to(cursor, {
                scale: 3,
                backgroundColor: '#ffffff',
            });
        };

        const pLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'transparent'
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleCursorShow)
        document.addEventListener('mouseleave', handleCursorHide)

        const attachEventListeners = () => {
            document.querySelectorAll('h1').forEach(item => {
                item.addEventListener('mouseenter', h1Enter);
                item.addEventListener('mouseleave', h1Leave);
            });

            document.querySelectorAll('p').forEach(item => {
                item.addEventListener('mouseenter', pEnter);
                item.addEventListener('mouseleave', pLeave);
            });
        };

        attachEventListeners();

        const observer = new MutationObserver(() => {
            attachEventListeners();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }, [pathname]);

    return (
        <div
            ref={cursorRef}
            className="w-10 h-10 mix-blend-difference fixed pointer-events-none z-50 border border-white rounded-full"
        />
    );
}