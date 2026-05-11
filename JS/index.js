import { menu } from "./menu.js";

function crearTarjetaMenu(categoria) {
    const boxMenu = document.getElementById("box-menu");
    const productosFiltrados = menu.filter(item => item.categoria === categoria);

    productosFiltrados.forEach(item => {
        // 👇 Formatear precio como quetzales
        const precioFormateado = item.precio.toLocaleString("es-GT", {
            style: "currency",
            currency: "GTQ"
        });

        const tarjeta = document.createElement("article");
        tarjeta.innerHTML = `
        <article class="container">
            <div class="card">
                <div class="card-img">
                    <img src="${item.img}" alt="${item.nombre}">
                </div>
                <div class="text">
                    <h3>${item.nombre}</h3>
                    <p>${item.descripcion}</p>
                    <h1>${precioFormateado}</h1>
                </div>
            </div>
        </article>
        `;
        boxMenu.appendChild(tarjeta);
    });
}

// 👇 Detectar el nombre del archivo actual
const pagina = window.location.pathname.split("/").pop(); 
// Ejemplo: "entradas.html"

// Quitar la extensión .html y usarlo como categoría
const categoria = pagina.replace(".html", "").toLowerCase();

// Llamar la función automáticamente
crearTarjetaMenu(categoria);

