import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getSortedPostsData } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Latest Insights | Maqsoud",
    description: "Thoughts on technology, design, and the future of digital product development.",
};

export default function BlogPage() {
    const posts = getSortedPostsData();
    return (
        <main>
            <Header />
            <div className="pt-10">
                <Blog posts={posts} showViewAll={false} />
            </div>
            <Footer />
        </main>
    );
}
