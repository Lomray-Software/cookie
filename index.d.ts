import { CookieParseOptions as DefaultParseOptions } from 'cookie';

export interface CookieParseOptions extends DefaultParseOptions {
  multiValuedCookies: boolean;
}

export function parse(str: string, options?: CookieParseOptions): Record<string, string>;

export { serialize, CookieSerializeOptions } from 'cookie';
