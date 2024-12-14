// PRODUCTOS
const productos = [
    // Actividades Recreativas
    {
        id: "computador-01",
        titulo: "Danza",
        imagen: "https://cursosbaileonline.com/wp-content/uploads/2023/03/clases_ninos.webp",
        categoria: {
            nombre: "Actividades Recreativas",
            id: "Danza"
        },
        precio: 170000
    },
    {
        id: "computador-02",
        titulo: "Fútbol",
        imagen: "https://static.vecteezy.com/system/resources/previews/043/374/601/non_2x/a-group-of-asian-children-playing-soccer-photo.jpg",
        categoria: {
            nombre: "Actividades Recreativas",
            id: "Danza"
        },
        precio: 1500000
    },
    {
        id: "computador-03",
        titulo: "Natacion",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqL50OsveHh9ykAUJLcBecG12ouvgBjRoCSQ&s",
        categoria: {
            nombre: "Actividades Recreativas",
            id: "Danza"
        },
        precio: 1650000
    },
    // Musica
    {
        id: "celular-01",
        titulo: "Curso de Guitarra",
        imagen: "https://media.istockphoto.com/id/1426314122/es/v%C3%ADdeo/chica-en-la-escuela-de-guitarra.jpg?s=640x640&k=20&c=1jDMOeMZ9XJAbzbIwph4oPeqXGBlmcdlOKP38Mz4Vos=",
        categoria: {
            nombre: "Musica",
            id: "Musica"
        },
        precio: 4500000
    },
    {
        id: "celular-02",
        titulo: "Curso de piano niños",
        imagen: "https://www.tiendacompensar.com/ccstore/v1/images/?source=/file/v1061637669951589598/products/nino-tocando-piano.jpg",
        categoria: {
            nombre: "Musica",
            id: "Musica"
        },
        precio: 500000
    },
    {
        id: "celular-03",
        titulo: "Curso de Bateria",
        imagen: "https://i.ytimg.com/vi/PfU2rpPjyAM/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgTyg0MA8=&rs=AOn4CLA8o8pHUtXtHJVxQS0zR2o3io6hnA",
        categoria: {
            nombre: "Musica",
            id: "Musica"
        },
        precio: 3500000
    },
    // Cocina
    {
        id: "accesorios-01",
        titulo: "Cocina Saludable",
        imagen: "https://editorialtelevisa.brightspotcdn.com/dims4/default/a788d4b/2147483647/strip/true/crop/1024x1024+0+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F5c%2F36%2F817ec8af41aa9918a6ba7ae8ec88%2Fdesayunos-ninos.jpg",
        categoria: {
            nombre: "Cocina",
            id: "Cocina"
        },
        precio: 658000
    },
    {
        id: "accesorios-02",
        titulo: "Curso de Cocina Basico",
        imagen: "https://img.remediosdigitales.com/dbe43e/1366_2000-3-/1366_2000.jpeg",
        categoria: {
            nombre: "Cocina",
            id: "Cocina"
        },
        precio: 550000
    },
    {
        id: "accesorios-03",
        titulo: "Explorando la Cocina",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XKqadNO6E_2WUUn0k2tE_Wf9tOvdswx7iA&s",
        categoria: {
            nombre: "Cocina",
            id: "Cocina"
        },
        precio: 450000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}