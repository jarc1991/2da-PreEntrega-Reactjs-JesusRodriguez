const products = [{
    id: 11,
    title: "flotador",
    nombre: "Flotador IDW.",
    categoria: "deportes",
    precio: "20.000",
    stock: 5,
    color: "vinotinto",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/IDW-Floatie1_750x.png?v=1666634188",
    alt: "Flotador",
    detalle: "Flotador de piscina"
  },
  {
    id: 12,
    title: "remera",
    nombre: "Remera I Drink W.",
    categoria: "indumentaria",
    precio: "6.500",
    stock: 5,
    color: "vinotinto",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/T-shirt-Maroon-Front_750x.png?v=1666633728",
    alt: "Remera I Drink Wine",
    detalle: "Remera-Yo bebo vino"
  },
  {
    id: 13,
    title: "gorra",
    nombre: "Gorra I Drink W.",
    categoria: "indumentaria",
    precio: "5.000",
    stock: 5,
    color: "vinotinto",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/Hat-Maroon-Front-Detail_750x.png?v=1666671140",
    alt: "Gorra I Drink Wine",
    Detalle: "Gorra-Yo bebo vino"
  },
  {
    id: 14,
    title:"vinilo",
    nombre: "Vinilo 30",
    categoria: "vinilo",
    precio: "6.000",
    stock: 5,
    color: "N/A",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/AA30-LP_750x.png?v=1634164889",
    alt: "Vinilo 30",
    detalle: "Último vinilo Adele - 30"
  },
  {
    id: 15,
    title: "cd",
    nombre: "CD 30",
    categoria: "disco",
    precio: "4.500",
    stock: 5,
    color: "N/A",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/AA30-CD_750x.png?v=1634165117",
    alt: "Disco 30",
    detalle: "Último disco Adele - 30"
  },
  {
    id: 16,
    title: "cassette",
    nombre: "Cass. Easy on me",
    categoria: "cassette",
    precio: "6.000",
    stock: 5,
    color: "negro",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/Easy-On-Me-Cassette_750x.png?v=1634238643",
    alt: "Cassette Easy on me",
    detalle: "Sencillo Easy on me en cassete"
  },
  {
    id: 17,
    title:"box",
    nombre: "Box 30",
    categoria: "box",
    precio: "15.000",
    stock: 5,
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/Bundle-Group2-cassette_750x.jpg?v=1635708191",
    alt: "box 30",
    detalle: "Box de Adele - Vinilo, CD, remera y más"
  },
  {
    id: 18,
    title: "cd",
    nombre: "CD 19",
    categoria: "disco",
    precio: "3.500",
    stock: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Adele_19.webp",
    alt: "Disco 19",
    detalle: "Disco de inicio a la carrera de Adele - 19"
  },
  {
    id: 19,
    title: "cd",
    nombre: "CD 21",
    categoria: "disco",
    precio: "4.000",
    stock: 5,
    img: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png",
    alt: "Disco 21",
    detalle: "Disco de mayor éxito de Adele (+ de 40 millones de discos)"
  },
  {
    id: 20,
    title: "cd",
    nombre: "CD 25",
    categoria: "disco",
    precio: "4.000",
    stock: 5,
    img: "https://http2.mlstatic.com/D_NQ_NP_335111-MLA20497658446_112015-W.jpg",
    alt: "Disco 25",
    detalle: "Disco 25"

  }
]

export const data = () => {

  return new Promise((resolve) => {

    setTimeout(() =>{

      resolve(products)

    },500)
    
  })
}

export const dataId = (productId) => {

    return new Promise ((resolve) => {

        setTimeout(() => {

          resolve(products.find(producto => producto.id === productId))

        }, 500)

    })

}