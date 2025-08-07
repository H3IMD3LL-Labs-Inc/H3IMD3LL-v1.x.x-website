// SERVER-ONLY Module: Reads from the file-system

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type BlogMetadata = {
    title: string;
    author: string;
    date: string;
};

type BlogPost = BlogMetadata & {
    slug: string;
    content: string;
};

const postsDir = path.join(process.cwd(), 'data/blogs');

export function getAllPosts() {
    return fs.readdirSync(postsDir).map((filename) => {
        const slug = filename.replace(/\.md$/, '');
        const filePath = path.join(postsDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data} = matter(fileContent);

        return {
            slug,
            ...(data as BlogMetadata),
        };
    });
}

export function getPostBySlug(slug: string) {
    const filePath = path.join(postsDir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        slug,
        content,
        ...(data as BlogMetadata),
    };
}
