import { Course } from "@/types/entities/Courses.js";
import { api } from "../api.js";

export const useful = await api.getData<Course[]>("useful");
