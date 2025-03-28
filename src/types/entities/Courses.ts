export type Lab = {
    id: string;
    name: string;
    title: string;
    number: number;
    content_url: string;
};

export type Schedule = {
    id: string;
    name: string;
    title: string;
    content_url: string;
};

export type Test = {
    id: string;
    name: string;
    title: string;
    content_url: string;
};

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
