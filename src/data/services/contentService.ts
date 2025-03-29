export interface Heading {
    depth: number;
    text: string;
    slug: string;
    id: string;
}

export const getMarkdownFromUrl = async (markdownUrl: string) => {
    const response = await fetch(markdownUrl);
    const data = response.text();

    return data;
};
