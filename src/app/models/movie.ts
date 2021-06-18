/* export class movie{
    _id?: number;
    titulo: string;
    imagen: string;
    calificacion: string;

    constructor(titulo: string, imagen: string, calificacion: string){
        this.titulo = titulo;
        this.imagen = imagen;
        this.calificacion = calificacion;
    }
} */

export interface Movies {
    id?: string;
    titulo: string;
    imagen: string;
    calificacion: number;
    info: string;
    genre: string;
}