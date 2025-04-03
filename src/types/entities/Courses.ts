import { Post } from "./Post.js";

export type Lab = Post & {
    number: number;
};

export type Schedule = Post;

export type Test = Post;

export type Course = {
    id: string;
    name: string;
    title: string;
    description: string;
    statement: string;
    year: number;
    lectures: Lecture[];
    schedule: Schedule;
    labs: Lab[];
    tests: Test[];
    type: CourseType;
};

export type Lecture = {
    id: string;
    title: string;
    description: string[];
    href: string;
};

export const courseType = {
    FULLTIME: "full-time",
    DISTANCE: "distance",
} as const;

export type CourseType = (typeof courseType)[keyof typeof courseType];
