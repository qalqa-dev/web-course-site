import { UsefulPost } from "@/types/entities/Useful.js";
import { api } from "../api.js";

export const useful = await api.getData<UsefulPost[]>("useful");
