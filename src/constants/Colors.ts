interface color {
    header:string
    body:string
    item:string
}

interface TypeColor{
    [key:string]:string,
    anime:string,
    episodio:string,
    pelicula:string,
}

export const colorlight:color = {
    header: "#252a2c",
    body: "#ccc",
    item: "#01bcf3"
}

export const TypesColor:TypeColor = {
    anime: "#01bcf3",
    episodio: "orange",
    pelicula: "red"
}


