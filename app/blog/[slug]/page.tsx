import { getAllPostIds, getPostData } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ScrollProgress from "@/components/ScrollProgress";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const postData = await getPostData(slug);

    if (!postData) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: postData.title,
        description: postData.description,
        openGraph: {
            title: postData.title,
            description: postData.description,
            images: [postData.image],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPostIds();
    return posts.map((post) => ({
        slug: post.params.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    if (!postData) {
        notFound();
    }

    return (
         <main className="bg-black min-h-screen text-white relative">
            <ScrollProgress />
            <Header />
            <article className="max-w-[800px] mx-auto py-32 px-6">
                <div className="mb-10">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center text-neutral-400 hover:text-orange-500 transition-colors mb-8 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to articles
                    </Link>
                    <span className="text-orange-500 text-sm font-medium mb-4 block">{postData.category}</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-hanken mb-6">{postData.title}</h1>
                    <div className="flex items-center gap-4 text-neutral-400 text-sm font-montserrat">
                        <span>{postData.date}</span>
                    </div>
                </div>

                <div className="mb-12 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
                     <Image
                        src={postData.image}
                        alt={postData.title}
                        width={1200}
                        height={630}
                        className="w-full h-auto"
                    />
                </div>

                <div
                    className="prose prose-invert prose-lg max-w-none font-montserrat prose-headings:font-hanken prose-headings:font-bold prose-p:text-neutral-300 prose-a:text-orange-500 hover:prose-a:text-orange-400 transition-colors"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
                />
            </article>
            <Footer />
        </main>
    );
}
