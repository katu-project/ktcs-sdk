interface CsConfig {
    url: string;
    app?: string;
    token: string;
    access_token?: string;
    cacheDir?: string;
    debug?: boolean;
}
interface KeyResp {
    id: string;
    key: string;
}
interface WxCfEnvResp {
    [key: string]: string;
}
export declare class Ktcs {
    ver: string;
    config: CsConfig;
    setConfig(config: CsConfig): void;
    getWxAppToken(app: string, ref?: string): Promise<string>;
    getWxGzhToken(app: string, ref?: string): Promise<string>;
    getWxToken(app: string, type: 'WX_MINI_APP_SECRET' | 'WX_GZH_SECRET', ref?: string): Promise<string>;
    getWxCfEnv(app: string, env: string, token: string, ref?: string): Promise<WxCfEnvResp>;
    getTencentKey(app: string, ref?: string): Promise<KeyResp>;
    getKey(name: string, type: string, ref?: string): Promise<KeyResp>;
    protected request<R>(url: string, data: any, method?: string): Promise<R>;
}
export {};
