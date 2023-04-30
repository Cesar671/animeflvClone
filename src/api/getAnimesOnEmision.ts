import { Types } from "../constants/Types"

export interface Emision{
    name:string
    url:string
    type:Types
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