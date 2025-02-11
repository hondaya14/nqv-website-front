import Image from "next/image";
import Link from "next/link";
import BlogImageList from "./components/blogs_links";
import ProductsImageList from "./components/products";

export default function Home() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <header className="p-8 gap-1 border-b bg-zinc-800 flex items-center">
                <h1 className="text-xl font-bold text-white">Yasuhisa Honda</h1>
                <Link className="ml-auto" href="https://linkedin.com/in/yasuhisa-honda-5a5470274">
                    <Image src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" width={30} height={30}/>
                </Link>
                <Link className="" href="https://github.com/hondaya14">
                    <Image src="/github.svg" alt="Github" width={30} height={30}/>
                </Link>
            </header>
            <div className="ml-[10%] mr-[10%] grid min-h-screen">
                <main className="row-start-1 items-center sm:items-start">
                <div className="mt-10 bg-grid p-3 w-full">
                        <h2 className="text-xl font-bold">Profile</h2>
                        <div className="mt-4 ml-4">
                            <div className="grid grid-cols-[1fr,2fr] gap-2">
                                <div><p>Name</p></div>
                                <div><p>Yasuhisa Honda</p></div>
                            </div>
                            <div className="grid grid-cols-[1fr,2fr] gap-2">
                                <div><p>Contacts</p></div>
                                <div><p>nqvno14@gmail.com</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 p-3 w-full bg-grid">
                        <h2 className="text-xl font-bold">Experience</h2>
                        <div className="mt-4 ml-4">

                            <div className="grid grid-cols-[1fr,2fr] gap-2">
                                <div><p>2018.06 - 2022.09</p></div>
                                <div>
                                    <p><a href= "https://dentalight.co.jp/" target="_blank" rel="noopener noreferrer">Dentalight.Inc</a></p>
                                    <p className="text-gray-400">Software Engineer (part-time)</p>
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
                                <div><p>2023.10 - present </p></div>
                                <div>
                                    <p><a href="https://www.lycorp.co.jp/" target="_blank" rel="noopener noreferrer">LY Corp. (Merger between LINE and Yahoo! Japan)</a></p>
                                    <p className="text-gray-400">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 p-3 w-full bg-grid">
                        <h2 className="text-xl font-bold">Education</h2>
                        <div className="mt-4 ml-4">
                        <div className="grid grid-cols-[1fr,2fr] gap-2">
                                <div><p>2021.04 - 2023.03</p></div>
                                <div>
                                    <p>Kyushu Institute of Technology</p>
                                    <p className="text-gray-400">Bachelor&#39;s of BioInformatics and Software Engineering</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr,2fr] gap-2">
                                <div><p>2021.04 - 2023.03</p></div>
                                <div>
                                    <p>Kyushu Institute of Technology</p>
                                    <p className="text-gray-400">Master&#39;s of Software Engineering</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 bg-grid p-3 w-full">
                        <h2 className="text-xl font-bold">Tech Blog</h2>
                        <div className="mt-4 ml-4">
                            <BlogImageList></BlogImageList>
                        </div>
                    </div>
                    <div className="mt-10 bg-grid p-3 w-full">
                        <h2 className="text-xl font-bold">Products</h2>
                        <div className="mt-4 ml-4">
                            <ProductsImageList></ProductsImageList>
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
