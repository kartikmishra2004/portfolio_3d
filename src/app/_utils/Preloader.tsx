'use client'
import { useEffect, useState } from "react"

export default function Preloader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])

    if (loading) {
        return (
            <section className='h-screen fixed z-[9999] w-full bg-accent flex justify-center items-center'><span className="w-10 h-10 rounded-full border-t-2 border-foreground animate-spin"></span></section>
        )
    } else {
        return null;
    }
};