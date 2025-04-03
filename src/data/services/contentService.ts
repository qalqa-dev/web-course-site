import { marked } from "marked";
import { createHighlighter } from "shiki";
import { awsS3Api } from "../api.js";

export interface Heading {
    depth: number;
    text: string;
    id: string;
}

export const getMarkdownFromUrl = async (markdownUrl: string) => {
    const content = await awsS3Api.getData<string>(markdownUrl);

    return renderMarkdownWithHeadings(content);
};

const cleanMarkdown = (markdown: string) => {
    return markdown.replace(/^---[\s\S]*?---/, "").trim();
};

const formatMarkdown = async () => {
    const renderer = new marked.Renderer();
    const headings: Heading[] = [];

    const highlighter = await createHighlighter({
        themes: ["catppuccin-mocha", "catppuccin-latte"],
        langs: ["html", "javascript", "typescript", "shell", "css"],
    });

    renderer.heading = function ({ tokens, depth }) {
        const text = tokens.map((token) => token.raw).join(" ");
        const id = text.toLowerCase().replace(/\s+/g, "-");
        headings.push({ id, text, depth });
        return `<h${depth} id="${id}">${text}</h${depth}>`;
    };

    renderer.code = function ({ text, lang, escaped }): string {
        return highlighter.codeToHtml(text, {
            lang: lang ?? "css",
            themes: {
                light: "catppuccin-latte",
                dark: "catppuccin-mocha",
            },
        });
    };

    return { renderer, headings };
};

const renderMarkdownWithHeadings = async (markdown: string) => {
    const { renderer, headings } = await formatMarkdown();
    const content = marked(cleanMarkdown(markdown), { renderer });
    return { content, headings };
};
