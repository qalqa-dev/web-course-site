export const routeEnum = {
    HOME: "/",
    USEFUL: "/useful",
    COURSE: (id: string) => `/courses/${id}`,
    ARCHIVE: "/archive",
    RETAKE: "/retake",
    MENTORS: "/mentors",
} as const;

export type RouteEnum = (typeof routeEnum)[keyof typeof routeEnum];
