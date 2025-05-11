import Link from "next/link"
import Image from "next/image"
import me from "../../public/me.png"

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-[#f9f6f2] text-[#2a2a2a] font-light flex flex-wrap flex-col">
            {/* Main Content */}
            <main className="flex-1 max-w-2xl mx-auto px-8 py-20 flex flex-col justify-center">
                {/* Name */}
                <h1 className="text-3xl mb-16 font-light tracking-wide">Resume</h1>

                {/* Personal Statement */}
                <p className="text-lg mb-24 leading-relaxed max-w-lg">
                    Yasuhisa Honda
                </p>

                <Image className="mb-24 m-auto" src={me} alt="me" />

                {/* Experience - Simplified */}
                <div className="mb-24 space-y-12">
                    <div>
                        <p className="text-sm text-[#777] mb-1">2023.10 - present</p>
                        <h2 className="text-lg mb-1">Software Engineer</h2>
                        <p className="text-sm">LY Corporation</p>
                        <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                            <li>Launching microservice using SpringBoot on AWS</li>
                            <li>Tech lead a team of 5 engineers</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm text-[#777] mb-1">2023.04 - 2023.10</p>
                        <h2 className="text-lg mb-1">Software Engineer</h2>
                        <p className="text-sm">LINE Corporation</p>
                        <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                            <li>Developed features for Demaecan</li>
                            <li>Implemented RESTful APIs and microservices using Spring Boot.</li>
                            <li>Treated high quantity data using kafka</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm text-[#777] mb-1">2018.06 - 2022.09</p>
                        <h2 className="text-lg mb-1">Software Engineer (part-time)</h2>
                        <p className="text-sm">Dentalight.Inc</p>
                        <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                            <li>Developed mobile app using Flutter/Dart.</li>
                            <li>Implemented Server APIs using Flask/Python.</li>
                            <li>Implemented web front component using Angular/TypeScript.</li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="mb-24 space-y-12">
                    <h3 className="text-sm uppercase tracking-widest mb-6 text-[#777]">Education</h3>

                    <div>
                        <p className="text-sm text-[#777] mb-1">2021.04 - 2023.03</p>
                        <h2 className="text-lg mb-1">Master of Software Engineering</h2>
                        <p className="text-sm">Kyushu Institute of Technology</p>
                        <p className="mt-2">
                            Specialized in quantum crystallography. Thesis on "Structural refinement of acetaminophen using quantum chemical calculations".
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-[#777] mb-1">2017.04 - 2021.03</p>
                        <h2 className="text-lg mb-1">Bachelor of BioInformatics and Software Engineering</h2>
                        <p className="text-sm">Kyushu Institute of Technology</p>
                        <p className="mt-2">
                            Computer Science and Biology
                        </p>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mb-24">
                    <h3 className="text-sm uppercase tracking-widest mb-6 text-[#777]">Certifications</h3>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg mb-1">Fundamental Information Technology Engineer Examination</h2>
                            <p className="text-sm text-[#777]">IPA, 2022</p>
                        </div>

                        <div>
                            <h2 className="text-lg mb-1">Applied Information Technology Engineer Examination</h2>
                            <p className="text-sm text-[#777]">IPA, 2023</p>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-24">
                    <h3 className="text-sm uppercase tracking-widest mb-6 text-[#777]">Skills</h3>

                    <div className="flex flex-wrap gap-y-2 gap-x-1 text-sm">
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Java</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Kotlin</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Rust</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">JavaScript</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">TypeScript</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Dart</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Spring Boot</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Flutter</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">AWS</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">GCP</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Docker</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">gRPC</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">REST API</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">OracleDB</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">MySQL</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Github actions</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Terraform</span>
                        <span className="after:content-['•'] after:mx-2 after:text-[#777]">Kubernetes</span>
                        <span className="after:mx-2 after:text-[#777]">ArgoCD</span>
                    </div>
                </div>

                {/* Blog */}
                <div className="mb-24">
                    <h3 className="text-sm uppercase tracking-widest mb-6 text-[#777]">Writing</h3>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg mb-1">
                                <Link href="https://techblog.lycorp.co.jp/ja/20231208a" className="hover:opacity-70 transition-opacity">
                                    How to upgrade SpringBoot 2.x to 3.x
                                </Link>
                            </h2>
                            <p className="text-sm text-[#777]">November 08, 2023</p>
                        </div>
                    </div>
                </div>

                {/* Emotional Quote */}
                <blockquote className="mb-24 border-l-[1px] border-[#2a2a2a] pl-4 italic text-sm">
                    "The silver bullet is that 'There is no silver bullet'."
                </blockquote>

            </main >

            {/* Footer */}
            < footer className="p-8 text-xs text-center text-[#777]" >
                <p>Yasuhisa Honda</p>
            </footer >
        </div >
    )
}
