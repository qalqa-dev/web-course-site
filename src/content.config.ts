import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { api } from "./data/api.js";
import { Course } from "./types/entities/Courses.js";

const useful = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/useful" }),
});

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
export const collections = { courses, useful };
