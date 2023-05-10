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

export interface EstrenosAnime{
    image:string
    name:string
    type:Types
    puntuacion:number
    descripcion:string

}

export const getEstrenos = ():EstrenosAnime[] => [
    {
        image:"../3815.jpg",
        name:"5-toubun no Hanayome Movie",
        type: Types.Pelicula,
        puntuacion: 4.5,
        descripcion:"Fuutarou Uesugi es un estudiante de segundo año de preparatoria/instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo como tutor a medio tiempo... ¡pero sus estudiantes resultan ser unas chicas de su propia clase! Para complicar más las cosas, son quintillizas... Las cinco hermanas son todas muy atractivas, pero no es lo único que tienen en común: todas odian estudiar y sus calificaciones siempre están al límite de la catástrofe. Tendrá que conseguir que las cinco estudien, pero primero tendrá que estudiar él cómo ganarse su confianza."
    }, {
        image:"../3815.jpg",
        name:"5-toubun no Hanayome Movie",
        type: Types.Pelicula,
        puntuacion: 4.5,
        descripcion:"Fuutarou Uesugi es un estudiante de segundo año de preparatoria/instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo como tutor a medio tiempo... ¡pero sus estudiantes resultan ser unas chicas de su propia clase! Para complicar más las cosas, son quintillizas... Las cinco hermanas son todas muy atractivas, pero no es lo único que tienen en común: todas odian estudiar y sus calificaciones siempre están al límite de la catástrofe. Tendrá que conseguir que las cinco estudien, pero primero tendrá que estudiar él cómo ganarse su confianza."
    }, {
        image:"../3815.jpg",
        name:"5-toubun no Hanayome Movie",
        type: Types.Pelicula,
        puntuacion: 4.5,
        descripcion:"Fuutarou Uesugi es un estudiante de segundo año de preparatoria/instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo como tutor a medio tiempo... ¡pero sus estudiantes resultan ser unas chicas de su propia clase! Para complicar más las cosas, son quintillizas... Las cinco hermanas son todas muy atractivas, pero no es lo único que tienen en común: todas odian estudiar y sus calificaciones siempre están al límite de la catástrofe. Tendrá que conseguir que las cinco estudien, pero primero tendrá que estudiar él cómo ganarse su confianza."
    }, {
        image:"../3815.jpg",
        name:"5-toubun no Hanayome Movie",
        type: Types.Pelicula,
        puntuacion: 4.5,
        descripcion:"Fuutarou Uesugi es un estudiante de segundo año de preparatoria/instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo como tutor a medio tiempo... ¡pero sus estudiantes resultan ser unas chicas de su propia clase! Para complicar más las cosas, son quintillizas... Las cinco hermanas son todas muy atractivas, pero no es lo único que tienen en común: todas odian estudiar y sus calificaciones siempre están al límite de la catástrofe. Tendrá que conseguir que las cinco estudien, pero primero tendrá que estudiar él cómo ganarse su confianza."
    }, {
        image:"../3815.jpg",
        name:"5-toubun no Hanayome Movie",
        type: Types.Pelicula,
        puntuacion: 4.5,
        descripcion:"Fuutarou Uesugi es un estudiante de segundo año de preparatoria/instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo como tutor a medio tiempo... ¡pero sus estudiantes resultan ser unas chicas de su propia clase! Para complicar más las cosas, son quintillizas... Las cinco hermanas son todas muy atractivas, pero no es lo único que tienen en común: todas odian estudiar y sus calificaciones siempre están al límite de la catástrofe. Tendrá que conseguir que las cinco estudien, pero primero tendrá que estudiar él cómo ganarse su confianza."
    }, {
        image:"../3815.jpg",
        name:"5-toubun no Hanayome Movie",
        type: Types.Pelicula,
        puntuacion: 4.5,
        descripcion:"Fuutarou Uesugi es un estudiante de segundo año de preparatoria/instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo como tutor a medio tiempo... ¡pero sus estudiantes resultan ser unas chicas de su propia clase! Para complicar más las cosas, son quintillizas... Las cinco hermanas son todas muy atractivas, pero no es lo único que tienen en común: todas odian estudiar y sus calificaciones siempre están al límite de la catástrofe. Tendrá que conseguir que las cinco estudien, pero primero tendrá que estudiar él cómo ganarse su confianza."
    }, 
]

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