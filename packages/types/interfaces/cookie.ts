export interface Cookie {
    name: string;

    value: string;

    domain?: string;

    path?: string;

    expires?: Date | number;

    secure?: boolean;

    httpOnly?: boolean;

    sameSite?: 'Strict' | 'Lax' | 'None' | undefined;

    maxAge?: number;
}