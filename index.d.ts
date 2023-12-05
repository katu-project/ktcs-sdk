interface CsConfig {
    url: string;
    app?: string;
    token: string;
    access_token?: string;
    debug?: boolean;
}
export declare class Ktcs {
    ver: string;
    config: CsConfig;
    setConfig(config: CsConfig): void;
    getWxAppToken(app: string, ref?: string): Promise<string>;
    getWxGzhToken(app: string, ref?: string): Promise<string>;
    getWxToken(app: string, type: 'WX_MINI_APP_SECRET' | 'WX_GZH_SECRET', ref?: string): Promise<string>;
}
export {};
