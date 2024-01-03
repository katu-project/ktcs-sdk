import { Base } from './base';
interface KeyResp {
    id: string;
    key: string;
}
interface WxCfEnvResp {
    [key: string]: string;
}
type WxKeyType = 'WX_MINI_APP_SECRET' | 'WX_GZH_SECRET';
export declare class Ktcs extends Base {
    ver: string;
    getWxAppToken(app: string, ref?: string): Promise<string>;
    getWxGzhToken(app: string, ref?: string): Promise<string>;
    getWxToken(app: string, type: WxKeyType, ref?: string): Promise<string>;
    getWxCfEnv(app: string, env: string, token: string, ref?: string): Promise<WxCfEnvResp>;
    getTencentKey(app: string, ref?: string): Promise<KeyResp>;
    getKey(name: string, type: string, ref?: string): Promise<KeyResp>;
}
export {};
