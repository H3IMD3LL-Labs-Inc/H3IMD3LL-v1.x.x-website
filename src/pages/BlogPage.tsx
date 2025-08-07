import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { Link } from "react-router-dom";

const posts = import.meta.glob("../data/blogs/*.md", { as: "raw" });

export default function BlogPage() {
    const [allPosts, setAllPosts] = useState<
        {slug: string; metadata: any  }[]
    >([])

    useEffect(() => {
        const loadPosts = async () => {
            const entries = Object.entries(posts)

            const parsed = await Promise.all(
                entries.map(async ([path, resolver]) => {
                    const raw = await resolver();
                    const { data } = matter(raw);
                    const slug = path.split("/").pop()?.replace(".md", "") || "unknown";

                    return { slug, metadata: data };
                })
            );

            setAllPosts(parsed);
        };

        loadPosts();
    }, []);

    return (
        <div style={{ padding: "3rem" }}>
            <h1 style={{ marginBottom: "2rem" }}><strong>H3IMD3LL Labs Engineering Blog</strong></h1>
            <p style={{ marginBottom: "1rem" }}>Our Engineers and Contributors are working tirelessly to improve H3IMD3LL. Due to the vast amount of work required for this, we've decided to create this blog post to share news, updates and any internal information about H3IMD3LL.</p>
            <div style={{ display: "grid", gap: "5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {allPosts.map(({ slug, metadata }) => (
                    <Link
                        to={`/blog/${slug}`}
                        key={slug}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            border: "2px solid #555",
                            borderRadius: "8px",
                            padding: "1rem",
                            backgroundColor: "#f9f9f9",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h2>{metadata.title}</h2>
                        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#555" }}>{metadata.date}</p>
                        <p>{metadata.quote || "No preview available..."}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
