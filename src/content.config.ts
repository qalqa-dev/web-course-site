import { defineCollection } from "astro:content";
import { api } from "./data/api.js";
import { Course } from "./types/entities/Courses.js";
import { UsefulPost } from "./types/entities/Useful.js";

const courses = defineCollection({
    loader: async () => {
        const courses = await api.getData<Course[]>("courses");
        return courses.map((course) => {
            return {
                ...course,
                id: course.name,
            };
        });
    },
});

const useful = defineCollection({
    loader: async () => {
        const courses = await api.getData<UsefulPost[]>("useful");
        return courses.map((post) => {
            return {
                ...post,
                id: post.name,
            };
        });
    },
});
export const collections = { courses, useful };
