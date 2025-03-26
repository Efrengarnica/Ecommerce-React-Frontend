import { create } from "zustand";

const useProductosStore = create((set) => ({
    productos : {
        hombre: [
            {
            id: 1,
            title: "Camisa Oxford",
            categoria: "Hombre",
            image: "h1.jpg",
            price: 500,
            talla: ["S", "M", "L"]
            },
            {
            id: 2,
            title: "Pantalones Chinos",
            categoria: "Hombre",
            image: "h2.jpg",
            price: 600,
            talla: ["S", "M", "L", "XL"]
            },
            {
            id: 3,
            title: "Camisa italiana",
            categoria: "Hombre",
            image: "h3.jpg",
            price: 700,
            talla: ["M", "L", "XL"]
            },
            {
            id: 4,
            title: "Playera básica",
            categoria: "Hombre",
            image: "h4.jpg",
            price: 900,
            talla: ["M", "L", "XL"]
            },
            {
            id: 5,
            title: "Lentes Trench",
            categoria: "Hombre",
            image: "h5.jpg",
            price: 1200,
            talla: ["L", "XL", "XXL"]
            },
            {
            id: 6,
            title: "Pantalones Trench",
            categoria: "Hombre",
            image: "h6.jpg",
            price: 300,
            talla: ["S", "M", "L"]
            },
            {
            id: 7,
            title: "Sudadera king",
            categoria: "Hombre",
            image: "h7.jpg",
            price: 650,
            talla: ["M", "L", "XL"]
            },
            {
            id: 8,
            title: "Camisa cargo",
            categoria: "Hombre",
            image: "h8.jpg",
            price: 700,
            talla: ["S", "M", "L", "XL"]
            },
            {
            id: 9,
            title: "Gorro acolchado",
            categoria: "Hombre",
            image: "h9.jpg",
            price: 800,
            talla: ["L", "XL", "XXL"]
            },
            {
            id: 10,
            title: "Playera Slim Fit",
            categoria: "Hombre",
            image: "h10.jpg",
            price: 1000,
            talla: ["M", "L", "XL"]
            },
            {
            id: 11,
            title: "Playera deportiva",
            categoria: "Hombre",
            image: "h11.jpg",
            price: 550,
            talla: ["M", "L", "XL"]
            },
            {
            id: 12,
            title: "Pantalones de lino",
            categoria: "Hombre",
            image: "h12.jpg",
            price: 750,
            talla: ["S", "M", "L"]
            },
            {
            id: 13,
            title: "Polo de manga corta",
            categoria: "Hombre",
            image: "h13.jpg",
            price: 400,
            talla: ["S", "M", "L"]
            },
            {
            id: 14,
            title: "Camisa jacket",
            categoria: "Hombre",
            image: "h14.jpg",
            price: 950,
            talla: ["M", "L", "XL"]
            },
            {
            id: 15,
            title: "Traje black",
            categoria: "Hombre",
            image: "h15.jpg",
            price: 800,
            talla: ["S", "M", "L", "XL"]
            }
        ],
        mujer: [
            {
            id: 16,
            title: "Blusa de Seda",
            categoria: "Mujer",
            image: "m1.jpg",
            price: 450,
            talla: ["S", "M", "L"]
            },
            {
            id: 17,
            title: "Chaqueta Slim",
            categoria: "Mujer",
            image: "m2.jpg",
            price: 550,
            talla: ["S", "M", "L", "XL"]
            },
            {
            id: 18,
            title: "Pantalones Midi",
            categoria: "Mujer",
            image: "m3.jpg",
            price: 400,
            talla: ["M", "L", "XL"]
            },
            {
            id: 19,
            title: "Traje blue",
            categoria: "Mujer",
            image: "m4.jpg",
            price: 900,
            talla: ["S", "M", "L", "XL"]
            },
            {
            id: 20,
            title: "Falda de Noche",
            categoria: "Mujer",
            image: "m5.jpg",
            price: 1200,
            talla: ["M", "L", "XL"]
            },
            {
            id: 21,
            title: "Vestido mazaht",
            categoria: "Mujer",
            image: "m6.jpg",
            price: 300,
            talla: ["S", "M", "L"]
            },
            {
            id: 22,
            title: "Conjunto tec",
            categoria: "Mujer",
            image: "m7.jpg",
            price: 650,
            talla: ["S", "M", "L"]
            },
            {
            id: 23,
            title: "Blusa de Lino",
            categoria: "Mujer",
            image: "m8.jpg",
            price: 700,
            talla: ["S", "M", "L", "XL"]
            },
            {
            id: 24,
            title: "Botas largas black",
            categoria: "Mujer",
            image: "m9.jpg",
            price: 850,
            talla: ["M", "L", "XL"]
            },
            {
            id: 25,
            title: "Falda de Lana",
            categoria: "Mujer",
            image: "m10.jpg",
            price: 1000,
            talla: ["S", "M", "L"]
            },
            {
            id: 26,
            title: "Falda de corte Alto",
            categoria: "Mujer",
            image: "m11.jpg",
            price: 550,
            talla: ["S", "M", "L"]
            },
            {
            id: 27,
            title: "Pantalón Palazzo",
            categoria: "Mujer",
            image: "m12.jpg",
            price: 750,
            talla: ["S", "M", "L"]
            },
            {
            id: 28,
            title: "Top Corto",
            categoria: "Mujer",
            image: "m13.jpg",
            price: 400,
            talla: ["S", "M", "L"]
            },
            {
            id: 29,
            title: "Chaleco de Lana",
            categoria: "Mujer",
            image: "m14.jpg",
            price: 950,
            talla: ["M", "L", "XL"]
            },
            {
            id: 30,
            title: "Pantalones de Cuero",
            categoria: "Mujer",
            image: "m15.jpg",
            price: 800,
            talla: ["S", "M", "L", "XL"]
            }
        ]
    },

    productosMap : new Map([
        [1, { id: 1, title: "Camisa Oxford", categoria: "Hombre", image: "h1.jpg", price: 500, talla: ["S", "M", "L"] }],
        [2, { id: 2, title: "Pantalones Chinos", categoria: "Hombre", image: "h2.jpg", price: 600, talla: ["S", "M", "L", "XL"] }],
        [3, { id: 3, title: "Camisa italiana", categoria: "Hombre", image: "h3.jpg", price: 700, talla: ["M", "L", "XL"] }],
        [4, { id: 4, title: "Playera básica", categoria: "Hombre", image: "h4.jpg", price: 900, talla: ["M", "L", "XL"] }],
        [5, { id: 5, title: "Lentes Trench", categoria: "Hombre", image: "h5.jpg", price: 1200, talla: ["L", "XL", "XXL"] }],
        [6, { id: 6, title: "Pantalones Trench", categoria: "Hombre", image: "h6.jpg", price: 300, talla: ["S", "M", "L"] }],
        [7, { id: 7, title: "Sudadera king", categoria: "Hombre", image: "h7.jpg", price: 650, talla: ["M", "L", "XL"] }],
        [8, { id: 8, title: "Camisa cargo", categoria: "Hombre", image: "h8.jpg", price: 700, talla: ["S", "M", "L", "XL"] }],
        [9, { id: 9, title: "Gorro acolchado", categoria: "Hombre", image: "h9.jpg", price: 800, talla: ["L", "XL", "XXL"] }],
        [10, { id: 10, title: "Playera Slim Fit", categoria: "Hombre", image: "h10.jpg", price: 1000, talla: ["M", "L", "XL"] }],
        [11, { id: 11, title: "Playera deportiva", categoria: "Hombre", image: "h11.jpg", price: 550, talla: ["M", "L", "XL"] }],
        [12, { id: 12, title: "Pantalones de lino", categoria: "Hombre", image: "h12.jpg", price: 750, talla: ["S", "M", "L"] }],
        [13, { id: 13, title: "Polo de manga corta", categoria: "Hombre", image: "h13.jpg", price: 400, talla: ["S", "M", "L"] }],
        [14, { id: 14, title: "Camisa jacket", categoria: "Hombre", image: "h14.jpg", price: 950, talla: ["M", "L", "XL"] }],
        [15, { id: 15, title: "Traje black", categoria: "Hombre", image: "h15.jpg", price: 800, talla: ["S", "M", "L", "XL"] }],
        [16, { id: 16, title: "Blusa de Seda", categoria: "Mujer", image: "m1.jpg", price: 450, talla: ["S", "M", "L"] }],
        [17, { id: 17, title: "Chaqueta Slim", categoria: "Mujer", image: "m2.jpg", price: 550, talla: ["S", "M", "L", "XL"] }],
        [18, { id: 18, title: "Pantalones Midi", categoria: "Mujer", image: "m3.jpg", price: 400, talla: ["M", "L", "XL"] }],
        [19, { id: 19, title: "Traje blue", categoria: "Mujer", image: "m4.jpg", price: 900, talla: ["S", "M", "L", "XL"] }],
        [20, { id: 20, title: "Falda de Noche", categoria: "Mujer", image: "m5.jpg", price: 1200, talla: ["M", "L", "XL"] }],
        [21, { id: 21, title: "Vestido mazaht", categoria: "Mujer", image: "m6.jpg", price: 300, talla: ["S", "M", "L"] }],
        [22, { id: 22, title: "Conjunto tec", categoria: "Mujer", image: "m7.jpg", price: 650, talla: ["S", "M", "L"] }],
        [23, { id: 23, title: "Blusa de Lino", categoria: "Mujer", image: "m8.jpg", price: 700, talla: ["S", "M", "L", "XL"] }],
        [24, { id: 24, title: "Botas largas black", categoria: "Mujer", image: "m9.jpg", price: 850, talla: ["M", "L", "XL"] }],
        [25, { id: 25, title: "Abrigo de Lana", categoria: "Mujer", image: "m10.jpg", price: 1000, talla: ["S", "M", "L"] }],
        [26, { id: 26, title: "Falda de corte Alto", categoria: "Mujer", image: "m11.jpg", price: 550, talla: ["S", "M", "L"] }],
        [27, { id: 27, title: "Pantalón Palazzo", categoria: "Mujer", image: "m12.jpg", price: 750, talla: ["S", "M", "L"] }],
        [28, { id: 28, title: "Top Corto", categoria: "Mujer", image: "m13.jpg", price: 400, talla: ["S", "M", "L"] }],
        [29, { id: 29, title: "Chaleco de Lana", categoria: "Mujer", image: "m14.jpg", price: 950, talla: ["M", "L", "XL"] }],
        [30, { id: 30, title: "Pantalones de Cuero", categoria: "Mujer", image: "m15.jpg", price: 800, talla: ["S", "M", "L", "XL"] }]
    ]),

    findProductById : (id) => {
        return get().productosMap.get(id)
    }

}))

export default useProductosStore;