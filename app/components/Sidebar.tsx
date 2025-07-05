"use client"

import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <section className="container mx-auto">
            <ul className="flex flex-col md:items-end items-start justify-center space-y-4 text-sm text-zinc-400">
                <Link
                    href={"/"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/" ? "#00a63a" : "#9f9fa9"
                    }}
                >
                    about
                </Link>
                <Link
                    href={"/books"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/books" ? "#00a63a" : "#9f9fa9"
                    }}
                >
                    books
                </Link>
                <Link 
                    href={"/writings"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/writings" ? "#00a63a" : "#9f9fa9"
                    }}
                >
                    writings
                </Link>
                <Link 
                    href={"/bookmarks"}
                    className={`hover:underline`}
                    style={{
                        color: pathname === "/bookmarks" ? "#00a63a" : "#9f9fa9"
                    }}
                >
                    bookmarks
                </Link>
                <Link 
                    target="_blank"
                    href={"https://github.com/IRjSI"}
                    className={`hover:text-[#00a63a] flex items-center justify-center`}
                >
                    <Github size={18} />
                </Link>
                <Link 
                    target="_blank"
                    href={"https://x.com/_RjS_0"}
                    className={`hover:text-[#00a63a] flex items-center justify-center`}
                >
                    <Twitter size={18} />
                </Link>
                <Link 
                    target="_blank"
                    href={"https://leerob.com/"}
                    className={`hover:text-[#00a63a] flex items-center justify-center gap-2`}
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
    )
}