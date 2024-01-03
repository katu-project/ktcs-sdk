interface CsConfig {
    url: string;
    app?: string;
    token: string;
    access_token?: string;
    cacheDir?: string;
    debug?: boolean;
}
export declare class Base {
    config: CsConfig;
    setConfig(config: Partial<CsConfig>): void;
    getCacheDir(filename: string): Promise<string>;
    request<R>(url: string, data: any, method?: string): Promise<R>;
}
export {};
