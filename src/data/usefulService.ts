import { Course } from "@/types/entities/Courses.js";
import { api } from "./api.js";

export const courses = await api.getData<Course[]>("/courses");
