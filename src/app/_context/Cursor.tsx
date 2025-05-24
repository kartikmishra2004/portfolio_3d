'use client';
import { createContext, useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

type CursorContextType = {
    scaleUp: (amount: number) => void;
    setColor: (color: string) => void;
    reset: () => void;
    setInnerContent: (html: string) => void;
    setBlendMode: (mode: string) => void;
    setStyle: (styles: Partial<CSSStyleDeclaration>) => void;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursor = () => {
    const context = useContext(CursorContext);
    if (!context) throw new Error('useCursor must be used within CursorProvider');
    return context;
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, { x: -100, y: -100 });

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX - 15,
                y: e.clientY - 10,
                ease: 'power4.out',
                duration: 0.4,
            });
        };

        const hideCursor = () => {
            gsap.to(cursor, { opacity: 0, duration: 0.4 });
        };

        const showCursor = () => {
            gsap.to(cursor, { opacity: 1, duration: 0.4 });
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', hideCursor);
        document.addEventListener('mouseenter', showCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', hideCursor);
            document.removeEventListener('mouseenter', showCursor);
        };
    }, [pathname]);

    const scaleUp = (amount: number) => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        gsap.to(cursor, { scale: amount, duration: 0.4 });
    };

    const setColor = (color: string) => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        gsap.to(cursor, { backgroundColor: color, duration: 0.4 });
    };

    const reset = () => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: 'transparent',
            duration: 0.4,
        });
        cursor.innerHTML = '';
        cursor.style.mixBlendMode = 'difference';
    };

    const setInnerContent = (html: string) => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        cursor.innerHTML = html;
    };

    const setBlendMode = (mode: string) => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        cursor.style.mixBlendMode = mode;
    };

    const setStyle = (styles: Partial<CSSStyleDeclaration>) => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        Object.assign(cursor.style, styles);
    };

    return (
        <CursorContext.Provider
            value={{
                scaleUp,
                setColor,
                reset,
                setInnerContent,
                setBlendMode,
                setStyle,
            }}
        >
            <div
                ref={cursorRef}
                className="w-10 h-10 mix-blend-difference fixed pointer-events-none z-50 border border-white rounded-full flex items-center justify-center text-center"
            />
            {children}
        </CursorContext.Provider>
    );
};
