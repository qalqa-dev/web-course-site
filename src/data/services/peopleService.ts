import { Person } from "@/types/entities/Person.js";
import { api } from "../api.js";

export const teachers = await api.getData<Person[]>("teachers");
export const mentors = await api.getData<Person[]>("mentors");
