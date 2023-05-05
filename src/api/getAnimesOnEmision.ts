import { Types } from "../constants/Types"

export interface Emision{
    name:string
    url:string
    type:Types
}

export interface UltimosCapitulos{
    image:string
    type:Types
    name:string
    id:number
    capitulo:number
}

export const getEmision = ():Emision[] => {

    return [
        {
            name:"One Piece",
            url: '#',
            type: Types.Anime,
        },{
            name: "naruto",
            url: "#",
            type: Types.Anime
        },{
            name: "Bleach",
            url: "#",
            type: Types.Pelicula
        },{
            name: "Detective Conan",
            url: "#",
            type: Types.Anime
        },{
            name: "Nier: Automata ver1.1a",
            url: "#",
            type: Types.Episodio
        },{
            name: "Tengoku daimakyou",
            url: "#",
            type: Types.Anime
        },{
            name: "Jigokuraku",
            url: "#",
            type: Types.Anime
        }
    ]
}

export const getCapitulos = ():UltimosCapitulos[] => {
    return [
        {
            image:"../muestra.webp",
            type:Types.Episodio,
            name:"One Piece",
            id: 1,
            capitulo: 1000
        },{
            image:"../muestra.webp",
            type:Types.Episodio,
            name:"Naruto",
            id: 1,
            capitulo: 100
        },{
            image:"../muestra.webp",
            type:Types.Episodio,
            name:"One Piece",
            id: 1,
            capitulo: 1000
        },{
            image:"../muestra.webp",
            type:Types.Anime,
            name:"One Piece",
            id: 1,
            capitulo: 1000
        },{
            image:"../muestra.webp",
            type:Types.Anime,
            name:"One Piece",
            id: 1,
            capitulo: 1000
        },{
            image:"../muestra.webp",
            type:Types.Anime,
            name:"One Piece",
            id: 1,
            capitulo: 1000
        },{
            image:"../muestra.webp",
            type:Types.Anime,
            name:"One Piece",
            id: 1,
            capitulo: 1000
        },
    ]
}