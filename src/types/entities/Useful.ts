import { Post } from "./Post.js";

export type UsefulPost = Post & {
    description: string;
    semester: number;
    last_update: Date;
    created_date: Date;
};
