export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export interface UsuarioResponse{
    userId: number;
    message: string;
    token: string;
    role: Roles;
}
export interface Usuario {
    id?: number;
    name?: string;
    password?: string;
    avatar?: string
  }
  