import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { api } from "./data/api.js";
import { Course } from "./types/entities/Courses.js";

const courses = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/courses" }),
});

const useful = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/useful" }),
});

const coursesServer = defineCollection({
    loader: async () => {
        const courses = await api.getData<Course[]>("courses");
        return courses.map((course) => ({
            id: course.id,
            data: course,
        }));
    },
});

export const collections = { courses, useful, coursesServer };
