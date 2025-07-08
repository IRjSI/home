import { Bookmark } from "lucide-react";
import Format from "../components/Format";
import Link from "next/link";

export default function Bookmarks() {

    return (
        <div>
            <Format heading="bookmarks" icon={<Bookmark size={24} className="text-[#55acee]" />} content="collection of tools, articles, resources and some other fun stuff" />

            <section className="mb-8">
                <h2 className="text-2xl mb-4">tools</h2>
                <ul className="space-y-2">
                    <Link href="https://www.iamsajid.com/ui-colors/" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                        <img 
                            src={`https://www.google.com/s2/favicons?domain=${new URL("https://www.iamsajid.com/ui-colors/").hostname}`}
                            alt=""
                            width={18}
                            height={18}
                            className=""
                        />
                        UI Colors
                    </Link>
                </ul>
            </section>            

            <section className="mb-8">
                <h2 className="text-2xl mb-4">articles</h2>
                <div className="space-y-8 pl-4">
                    <div className="">
                        <h3 className="text-xl mb-2">articles to read</h3>
                        <ul className="space-y-2">
                            <Link href="https://paulstamatiou.com/craft" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                                <img 
                                    src={`https://www.google.com/s2/favicons?domain=${new URL("https://paulstamatiou.com/craft").hostname}`}
                                    alt=""
                                    width={18}
                                    height={18}
                                    className=""
                                    />
                                craft
                            </Link>
                            <Link href="https://joelcalifa.com/blog/tiny-wins/" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                                <img 
                                    src={`https://www.google.com/s2/favicons?domain=${new URL("https://joelcalifa.com/blog/tiny-wins/").hostname}`}
                                    alt=""
                                    width={18}
                                    height={18}
                                    className=""
                                    />
                                tiny wins
                            </Link>
                            <Link href="https://sive.rs/kimo" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                                <img 
                                    src={`https://www.google.com/s2/favicons?domain=${new URL("https://sive.rs/kimo").hostname}`}
                                    alt=""
                                    width={18}
                                    height={18}
                                    className=""
                                    />
                                there&apos;s no speed limit
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl mb-2">articles read</h3>
                        <ul className="space-y-2">
                            <Link href="https://ryanholiday.net/all-success-is-a-lagging-indicator/" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                                <img 
                                    src={`https://www.google.com/s2/favicons?domain=${new URL("https://ryanholiday.net/all-success-is-a-lagging-indicator/").hostname}`}
                                    alt=""
                                    width={18}
                                    height={18}
                                    className=""
                                    />
                                all success is a lagging indicator
                            </Link>
                            <Link href="https://paulgraham.com/talk.html" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                                <img 
                                    src={`https://www.google.com/s2/favicons?domain=${new URL("https://paulgraham.com/talk.html").hostname}`}
                                    alt=""
                                    width={18}
                                    height={18}
                                    className=""
                                    />
                                How to write
                            </Link>
                            <Link href="https://blog.samaltman.com/how-to-be-successful" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                                <img 
                                    src={`https://www.google.com/s2/favicons?domain=${new URL("https://blog.samaltman.com/how-to-be-successful").hostname}`}
                                    alt=""
                                    width={18}
                                    height={18}
                                    className=""
                                    />
                                How to be successful - sam altman
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>            

            <section className="mb-8">
                <h2 className="text-2xl mb-4">github repos</h2>
                <ul className="space-y-2">
                    <Link href="https://github.com/codecrafters-io/build-your-own-x" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                        <img 
                            src={"https://github.com/favicon.ico"}
                            alt=""
                            width={18}
                            height={18}
                            className="bg-white"
                        />
                        Build your own X
                    </Link>
                    <Link href="https://github.com/leerob/vim-for-react-devs" className="text-sm text-zinc-100 flex items-center gap-2 underline">
                        <img 
                            src={"https://github.com/favicon.ico"}
                            alt=""
                            width={18}
                            height={18}
                            className="bg-white"
                        />
                        Vim for React devs
                    </Link>
                </ul>
            </section>

        </div>
    )
}