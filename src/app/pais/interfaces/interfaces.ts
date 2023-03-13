export interface AuthResponse {
    
    id?: string,
    username?: string,
    email?: string,
    roles?: string[],
    accessToken?:string,
    refreshToken?:string,
    error?:string
    
}

export interface User {
    id:string,
    username: string,
    email: string,
    roles: string[],
}