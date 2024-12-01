import React from "react";
import Image from "next/image";
import Link from "next/link";
import {ExternalLinksIcon} from "@/app/components/icons";

export default function Private() {
    const currentYear = new Date().getFullYear();
    const filmarks_link = "https://filmarks.com/users/honhon_marks";
    return (
        <div className="grid ml-[10%] mr-[10%] items-center min-h-screen ">
            <main className="w-full">
                <div className="pt-10 pb-10 bg-[#254160]">
                    <Link className="flex justify-center items-center" href={filmarks_link}>
                        <div
                            className="ml-5 mr-5 grid grid-cols-[1fr,1fr] md:gap-4 justify-items-center">
                            <div>
                                <Image className="w-full" src="/filmarks.svg" alt="Filmarks" width={180} height={180}/>
                            </div>
                            <div className="flex items-center">
                                <ExternalLinksIcon width={15} height={15}></ExternalLinksIcon>
                                <p>honhon_marks</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
            <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
                <p className="">©hondaya {currentYear} All Rights Reserved.</p>
            </footer>
        </div>
    );
}
