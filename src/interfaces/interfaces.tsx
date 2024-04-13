import { NavItemProps } from "../components";
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

export interface navDataProps{
    logo:string,
    idData:NavItemProps[]
}
export interface bannerDataProps{
    title: string,
    button: string,
    search: string,
    subtitle1:string,
    subtitle2:string,
    subtitle3:string,
    subtitle4:string,
}