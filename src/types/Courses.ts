import { Lab, Schedule, Test } from "./entities/Courses.js";

export type CourseLayoutProps = {
    title: string;
    description: string;
    name: string;
    statementHref?: string;
    lectures?: Lecture[];
    schedule?: Schedule;
    labs: Lab[];
    rk?: Test[];
};

type Lecture = {
    title: string;
    description: string[];
    href: string;
};
