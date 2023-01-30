import { CookieParseOptions as DefaultParseOptions } from 'cookie';

export interface CookieParseOptions extends DefaultParseOptions {
  multiValuedCookies: boolean;
}

type TReturn<T extends CookieParseOptions> = T['multiValuedCookies'] extends true ? Record<string, string[]> : Record<string, string>;

export function parse<T extends CookieParseOptions = {}>(str: string, options?: T): TReturn<T>;

export { serialize, CookieSerializeOptions } from 'cookie';
