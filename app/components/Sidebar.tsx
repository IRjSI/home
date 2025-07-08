"use client"

import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Sidebar() {
    const pathname = usePathname();

    useGSAP(() => {
        gsap.from("#green-box", {
            y: 260,
            repeat: -1,
            duration: 3,
            ease: "back.inOut",
            yoyo: true
        })
    }, [])

    return (
        <div className="flex gap-2">

        <section className="container mx-auto">
            <ul className="flex flex-col md:items-end items-start justify-center space-y-4 text-sm text-zinc-400">
                <Link
                    href={"/"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/" ? "#55acee" : "#9f9fa9"
                    }}
                    >
                    about
                </Link>
                <Link
                    href={"/timeline"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/timeline" ? "#55acee" : "#9f9fa9"
                    }}
                    >
                    timeline
                </Link>
                <Link
                    href={"/books"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/books" ? "#55acee" : "#9f9fa9"
                    }}
                    >
                    books
                </Link>
                <Link 
                    href={"/writings"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/writings" ? "#55acee" : "#9f9fa9"
                    }}
                >
                    writings
                </Link>
                <Link 
                    href={"/bookmarks"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/bookmarks" ? "#55acee" : "#9f9fa9"
                    }}
                    >
                    bookmarks
                </Link>
                <Link 
                    target="_blank"
                    href={"https://github.com/IRjSI"}
                    className={`hover:text-[#55acee] flex items-center justify-center`}
                    >
                    <Github size={18} />
                </Link>
                <Link 
                    target="_blank"
                    href={"https://x.com/_RjS_0"}
                    className={`hover:text-[#55acee] flex items-center justify-center`}
                    >
                    <Twitter size={18} />
                </Link>
                <Link 
                    target="_blank"
                    href={"https://leerob.com/"}
                    className={`hover:text-[#55acee] flex items-center justify-center gap-2`}
                    >
                    inspiration{"(copied from)"}
                    <img 
                        src={`https://www.google.com/s2/favicons?domain=${new URL("https://leerob.com/").hostname}`}
                        alt=""
                        width={24}
                        height={24}
                        className="rounded-full"
                        />
                </Link>
            </ul>
        </section>
            <div id="green-box" className="h-2 w-2 bg-[#55acee] rounded-xs"></div>
        </div>
    )
}