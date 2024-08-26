const items = [
    {id: 1,
     nombre: "Microsoft Flight Simulator",
     image: "https://i.ebayimg.com/thumbs/images/g/kSsAAOSwxINmIAoK/s-l1200.jpg",
     precio: 35000,
     desc: "Simulador de vuelo de Microsoft",
     stock: 15,
     categoria: "Pc"
    },
    {id: 2,
     nombre: "Grand Theft Auto V",
     image: "https://http2.mlstatic.com/D_627097-MLU73784820464_012024-C.jpg",
     precio: 15000,
     desc: "Nuevo GTA para jugar con amigos",
     stock: 20,
     categoria: "Xbox"
    },
    {id:3,
     nombre: "The Witcher III Wild Hunt",
     image: "https://http2.mlstatic.com/D_NQ_NP_784881-MLA53884995464_022023-O.webp",
     precio: 5000,
     desc: "The Witcher 3: Wild Hunt es un videojuego de rol desarrollado y publicado por la compañía polaca CD Projekt RED. Esta compañía es la desarrolladora mientras que la distribución corre a cargo de la Warner Bros. Interactive, en el caso de Norteamérica y Bandai Namco para Europa.",
     stock: 45,
     categoria: "Playstation"
    },
    {id:4,
        nombre: "Luigi´s Mansion 3",
        image: "https://nextgames.com.ar/img/Public/1040/producto-81-fd3tzull-sl1500-6360.jpg",
        precio: 45000,
        desc: "Luigi's Mansion 3 es un videojuego de acción y aventura desarrollado por el estudio canadiense Next Level Games y publicado por la empresa japonesa Nintendo en 2019. Es la tercera entrega de la serie Luigi's Mansion, y la acción principal tiene lugar después de Luigi's Mansion: Dark Moon para la consola Nintendo 3DS.",
        stock: 55,
        categoria: "Nintendo"
       },
    {id:5,
        nombre: "FC 24",
        image: "https://nextgames.com.ar/img/Public/1040-producto-ea-fc-24-ps5-4261.jpg",
        precio: 65000,
        desc: "FC 24 es un videojuego de fútbol, desarrollado por EA, y publicado por EA Sports. Este juego marca la primera entrega de la serie EA Sports FC, ​ tras la conclusión de la asociación de EA con FIFA.",
        stock: 5,
        categoria: "Playstation"
       },
    {id:6,
        nombre: "Far Cry 6",
        image: "https://m.media-amazon.com/images/I/71uyhYetuyL._AC_UF894,1000_QL80_.jpg",
        precio: 60000,
        desc: "Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry, fue lanzado el 7 de octubre del 2021 para las plataformas de Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Google Stadia.",
        stock: 23,
        categoria: "Pc"
       },
]
const err = "hubo un error"

export const getProducts = () => {
    return new Promise(( resolve, reject ) => {


        setTimeout(() => {
            if(false){
                reject(new Error("Ocurrio Un Error"))
            }else{
                resolve(items)
            }
        },1000)        
    }) 
}

export const getSingleProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(items.find(e => e.id.toString() === id))
        })
    }, 1000)
}