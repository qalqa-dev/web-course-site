import { apiEnum } from "@/types/Api.js";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

type RequestData = Record<string, any>;

interface ApiConfig {
    baseUrl: string;
    token?: string;
}

class Api {
    private axiosInstance: AxiosInstance;
    private baseUrl: string;

    constructor(config: ApiConfig) {
        this.baseUrl = config.baseUrl;
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    private addTokenToHeaders(
        config: AxiosRequestConfig,
        token?: string
    ): AxiosRequestConfig {
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }
        return config;
    }

    async getData<T>(endpoint: string, token?: string): Promise<T> {
        const config: AxiosRequestConfig = this.addTokenToHeaders(
            { method: "GET", url: endpoint },
            token
        );
        const response = await this.axiosInstance.request<T>(config);
        return response.data;
    }

    async postData<T>(data: RequestData, token?: string): Promise<T> {
        const config: AxiosRequestConfig = this.addTokenToHeaders(
            { method: "POST", data },
            token
        );
        const response = await this.axiosInstance.request<T>(config);
        return response.data;
    }

    async putData<T>(data: RequestData, token?: string): Promise<T> {
        const config: AxiosRequestConfig = this.addTokenToHeaders(
            { method: "PUT", data },
            token
        );
        const response = await this.axiosInstance.request<T>(config);
        return response.data;
    }

    async deleteData<T>(endpoint: string, token?: string): Promise<T> {
        const config: AxiosRequestConfig = this.addTokenToHeaders(
            { method: "DELETE", url: endpoint },
            token
        );
        const response = await this.axiosInstance.request<T>(config);
        return response.data;
    }
}

export const api = new Api({ baseUrl: apiEnum.BASE_URL });
export const awsS3Api = new Api({ baseUrl: apiEnum.AWS_S3_ENDPOINT_URL });
