export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export type FetchParams = {
    url: string;
    method?: RequestMethod;
    data?: unknown;
    params?: unknown;
    headers?: Record<string, string>;
};

export const apiEnum = {
    BASE_URL: "http://localhost:8000/api",
    AWS_S3_ENDPOINT_URL: "http://localhost:9000",
} as const;

export type apiEnum = (typeof apiEnum)[keyof typeof apiEnum];
