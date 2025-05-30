'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Navbar() {

    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            duration: 1.5,
            ease: 'power4.out',
            delay: 3,
        });
    });

    return (
        <header ref={navRef} className="fixed flex z-50 backdrop-blur-sm justify-between px-40 items-center h-14 w-full border-b">
            <Link href={'/'}>
                <Image className="saturate-0 brightness-150" src='/assets/images/logo.svg' alt="logo" width={18} height={18} />
            </Link>
            <nav>
                <ul className="flex gap-10 font-semibold text-xs tracking-widest">
                    <li className=" text-muted-foreground hover:text-foreground transition-colors duration-300">
                        <Link href={'/about'}>ABOUT</Link>
                    </li>
                    <li className=" text-muted-foreground hover:text-foreground transition-colors duration-300">
                        <Link href={'/projects'}>PROJECTS</Link>
                    </li>
                    <li className=" text-muted-foreground hover:text-foreground transition-colors duration-300">
                        <Link href={'/resume'}>RESUME</Link>
                    </li>
                </ul>
            </nav>
            <div className="">
                <Link href={'/contact'}>
                    <Button className="cursor-pointer" size={"xs"}>CONTACT</Button>
                </Link>
            </div>
        </header>
    )
}