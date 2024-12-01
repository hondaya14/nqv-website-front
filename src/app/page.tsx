import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <header className="p-8 gap-1 border-b bg-zinc-800 flex items-center">
                <h1 className="text-xl font-bold">Yasuhisa Honda</h1>
                <Link className="ml-auto" href="https://github.com/hondaya14">
                    <Image src="/github.svg" alt="Github" width={30} height={30}/>
                </Link>
            </header>
            <div className="ml-[10%] mr-[10%] grid min-h-screen">
                <main className="row-start-1 items-center sm:items-start">
                    <div className="mt-10 bg-[#254160] p-3 w-full">
                        <h2 className="text-xl font-bold">Career</h2>
                        <div className="mt-4 ml-4">
                            <div className="grid grid-cols-[1fr,2fr] gap-2">
                                <div><p>2021.04 - 2023.03</p></div>
                                <div>
                                    <p>Kyushu Institute of Technology</p>
                                    <p className="text-gray-400">Master&#39;s of Software Engineering</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr,2fr] gap-2">
                                <div><p>2023.04 - 2023.10</p></div>
                                <div>
                                    <p>LINE Corporation</p>
                                    <p className="text-gray-400">Software Engineer</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr,2fr] gap-2">
                                <div><p>2023.10 - </p></div>
                                <div>
                                    <p>LY Corp. (Merger between LINE and Yahoo! Japan)</p>
                                    <p className="text-gray-400">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
                    ©hondaya {currentYear} All Rights Reserved.
                </footer>
            </div>
        </div>
    );
}
