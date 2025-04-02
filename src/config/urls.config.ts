export const urlsEnum = {
    API_URL: "http://localhost:8000/api",
    AWS_S3_ENDPOINT_URL: "http://localhost:9000",
};

export type urlsEnum = (typeof urlsEnum)[keyof typeof urlsEnum];
