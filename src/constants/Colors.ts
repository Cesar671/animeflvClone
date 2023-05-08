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
    header: "#3b4248",
    body: "white",
    item: "#01bcf3"
}

export const TypesColor:TypeColor = {
    anime: "#01bcf3",
    episodio: "orange",
    pelicula: "red"
}


