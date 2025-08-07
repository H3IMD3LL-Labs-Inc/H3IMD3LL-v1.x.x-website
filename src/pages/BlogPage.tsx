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
        <div style={{ padding: "2rem" }}>
            <h1>Engineering Blog</h1>
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {allPosts.map(({ slug, metadata }) => (
                    <Link
                        to={`/blog/${slug}`}
                        key={slug}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            border: "1px solid #555",
                            borderRadius: "8px",
                            padding: "1rem",
                            backgroundColor: "#f9f9f9",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h2>{metadata.title}</h2>
                        <p style={{ fontSize: "0.9rem", color: "#555" }}>{metadata.date}</p>
                        <p>{metadata.excerpt || "No preview available..."}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
