import { ImageCard, ImageGrid } from "../types";

export interface recomendacionesProps{
    imagen:ImageGrid | ImageCard,
    titulo:string,
    subtitulo:string,
}
export interface destacadasProps extends recomendacionesProps{}

export interface CardTrendProps extends recomendacionesProps{
    styles?:string;
}