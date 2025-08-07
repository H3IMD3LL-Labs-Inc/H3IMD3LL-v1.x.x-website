import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const posts = import.meta.glob("/src/data/blogs/*.md", { as: "raw" });

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState<{ content: string; metadata: any } | null>(null);

    useEffect(() => {
        const loadPost = async () => {
            const match = Object.entries(posts).find(([path]) =>
                path.endsWith(`${slug}.md`)
            );

            if (!match) return;

            const raw = await match[1]();
            const { content, data } = matter(raw);
            setPost({ content, metadata: data })
        };

        loadPost();
    }, [slug]);

    if (!post) return <p>Loading post...</p>

    return(
        <div style={{ padding: "3rem", maxWidth: "800px", margin: "auto" }}>
            <h1><strong>{post.metadata.title}</strong></h1>
            <div className="prose prose-lg max-w-3xl mx-auto py-8">
                <ReactMarkdown
                    components={{
                        a: ({ node, ...props }) => (
                            <a {...props} target="_blank" rel="noopener noreferrer" style={{ color: "#ff5050", textDecoration: "underline" }} />
                        )
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>
            <h1><strong>{post.metadata.author}</strong> - {post.metadata.date}</h1>
        </div>
    );
}
