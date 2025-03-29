import { Course } from "@/types/entities/Courses.js";
import { api } from "../api.js";

export const shortCourses = await api.getData<Course[]>("/courses/short");

export const courses = await api.getData<Course[]>("/courses");

export const getCourseDataByName = async (name: string): Promise<Course> => {
    return api.getData<Course>(`/courses/${name}`);
};
