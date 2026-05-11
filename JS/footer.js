import { Datas } from "./Data.js";

function crearFooter() {
    const footer = document.createElement("footer-container");
    footer.innerHTML = `
       <div class="container-footer">
            <article class="footer-img">
                <a href=""><img src="img/logo-white.png" alt=""></a>
            </article>
            <article>
                <h2>${Datas.info.horario}</h2>
                <h2>${Datas.info.horarioSabado}</h2>
                <h2>${Datas.info.horarioDomingo}</h2>
            </article>
            <article>
                <h2>${Datas.info.correo}</h2>
                <h2><Abbr></Abbr>Abierto los 7 dias de la semana</h2>
                <h2>Telefono:${Datas.info.telefono}</h2>
            </article>
            </div>
            <hr>
            <div class="header-footer">
                <a href="${Datas.links.inicio}">inicio</a>
                <a href="${Datas.links.nosotros}">nosotros</a>
                <a href="${Datas.links.menu}">menú</a>
                <a href="${Datas.links.contacto}">ubicación</a>
            </div>
        </div>
    `;

    document.getElementById("footer-render").appendChild(footer);
}

crearFooter();