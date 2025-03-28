export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export type FetchParams = {
    url: string;
    method?: RequestMethod;
    data?: unknown;
    params?: unknown;
    headers?: Record<string, string>;
};

export const EnumApi = {
    BASE_URL: "https://localhost:8000",
} as const;

export type EnumApi = (typeof EnumApi)[keyof typeof EnumApi];
