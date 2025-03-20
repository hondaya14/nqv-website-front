"use client";

import { SiteHeader } from "@/src/components/site-header";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Github, Linkedin, Mail, Download, Code, Briefcase, GraduationCap, BookOpen, Package, MailIcon, PlaySquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <SiteHeader />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
          <div className="container flex flex-col items-center gap-4 text-center">
            <div className="rounded-full border-4 border-primary/10 p-1">
              <img 
                src="https://avatars.githubusercontent.com/u/63848441?v=4" 
                alt="nqvno" 
                className="h-32 w-32 rounded-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Yasuhisa Honda
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              @honday
            </p>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/hondaya14">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://jp.linkedin.com/in/yasuhisa-honda-5a5470274">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:nqvno14@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container space-y-4 md:py-12 lg:py-24">
          <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">
                <GraduationCap className="mr-2 h-4 w-4 hidden sm:inline-block" />
                <span>Education</span>
              </TabsTrigger>
              <TabsTrigger value="experience">
                <Briefcase className="mr-2 h-4 w-4 hidden sm:inline-block" />
                <span>Experience</span>
              </TabsTrigger>
              <TabsTrigger value="blog">
                <BookOpen className="mr-2 h-4 w-4 hidden sm:inline-block" />
                <span>Blog</span>
              </TabsTrigger>
              <TabsTrigger value="products">
                <Package className="mr-2 h-4 w-4 hidden sm:inline-block" />
                <span>Products</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">About Me</h3>
                    <p className="text-muted-foreground">
                      I'm a software engineer with over 2 years of experience building web applications and distributed systems. I specialize in Java/Kotlin and SpringBoot, cloud platform(AWS).
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Kotlin", "Dart", "Spring Boot", "Flutter", "AWS", "Docker", "gRPC", "REST API", "OracleDB", "MySQL"].map((skill) => (
                        <span key={skill} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-6 space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Master of Software Engineering</h3>
                          <p className="text-muted-foreground">Kyushu Institute of Technology</p>
                        </div>
                        <span className="text-sm text-muted-foreground">2021.04 - 2023.03</span>
                      </div>
                      <p className="mt-2">
                        Specialized in quantum crystallography. Thesis on "Structural refinement of acetaminophen using quantum chemical calculations".
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Bachelor of BioInformatics and Software Engineering</h3>
                          <p className="text-muted-foreground">Kyushu Institute of Technology</p>
                        </div>
                        <span className="text-sm text-muted-foreground">2021.04 - 2023.03</span>
                      </div>
                      <p className="mt-2">
                        Only hang out :)
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Certifications</h3>
                        </div>
                      </div>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                          <Code className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                          <div>
                            <p className="font-medium">基本情報処理技術者試験 合格</p>
                            <p className="text-sm text-muted-foreground">IPA, 2022</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Code className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                          <div>
                            <p className="font-medium">応用情報処理技術者試験 合格</p>
                            <p className="text-sm text-muted-foreground">IPA, 2023</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="experience" className="mt-6 space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Software Engineer</h3>
                          <p className="text-muted-foreground"><u><a href="https://line.me/" target="_blank">LY Corporation</a></u> Merger between LINE and Yahoo! JAPAN</p>
                        </div>
                        <span className="text-sm text-muted-foreground">2023.10 - present</span>
                      </div>
                      <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Launching microservice using SpringBoot on AWS</li>
                        <li>Tech lead a team of 5 engineers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Software Engineer</h3>
                          <p className="text-muted-foreground"><u><a href="https://line.me/" target="_blank">LINE Corporation</a></u></p>
                        </div>
                        <span className="text-sm text-muted-foreground">2023.04 - 2023.10</span>
                      </div>
                      <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Developed features for Demaecan</li>
                        <li>Implemented RESTful APIs and microservices using Spring Boot.</li>
                        <li>Treated high quantity data using kafka</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Software Engineer (part-time)</h3>
                          <p className="text-muted-foreground"><u><a href="https://dentalight.co.jp/" target="_blank">Dentalight.Inc</a></u></p>
                        </div>
                        <span className="text-sm text-muted-foreground">2018.06 - 2022.09</span>
                      </div>
                      <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                        <li>Developed mobile app using Flutter/Dart.</li>
                        <li>Implemented Server APIs using Flask/Python.</li>
                        <li>Implemented web front component using Angular/TypeScript.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="blog" className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "How to upgrade SpringBoot 2.x -> 3.x",
                    date: "November 08, 2023",
                    url: "https://techblog.lycorp.co.jp/ja/20231208a",
                    excerpt: "How to upgrade Spring Boot 3x",
                    image: "https://techblog.lycorp.co.jp/static/a9359711b481ac6cf0d0455e51eaf981/d990e/1701233068788.png"
                  },
                ].map((post, index) => (
                  <Link href={post.url} target="_blank">
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                        <Button variant="link" className="p-0" asChild>
                          <Link href={`/blog/${index + 1}`}>
                            Read More
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/blog">
                    View All Posts
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="mt-6 space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "digilm",
                    description: "Film camera app",
                    image: "https://play-lh.googleusercontent.com/3nWoGhwtsQOTYacGaYL1PForg_a-TURmTLxjo4AjLZQVzU7yekDShPeKys8B1Y15fwI",
                    tags: ["App", "Flutter", "Dart"],
                    custom_component: <a href='https://play.google.com/store/apps/details?id=nqvno14.honhon.digilm&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Google Play で手に入れよう' src='https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png'/></a>
                  },
                ].map((product, index) => (
                  <Card key={index} className="overflow-hidden flex flex-col">
                    <div className="aspect-video relative">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-bold">{product.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {product.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-muted-foreground">{product.description}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 pl-4 pr-4">
                        {product.custom_component}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
            © 2025 Yasuhisa honda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}