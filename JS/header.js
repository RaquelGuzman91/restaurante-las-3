import { Datas } from "./Data.js";

function renderHeader() {
  const fragment = document.createDocumentFragment();
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <nav class="menu-bars">
      <a class="img-logo" href="index.html">
        <img src="./img/LogoRedOnBlack-optimizado.png" alt="" width="70px">
      </a>
      <ul class="nav links">
        <li><a class="link-bar" href="${Datas.links.inicio}">INICIO</a></li>
        <li><a class="link-bar" href="${Datas.links.nosotros}">NOSOTROS</a></li>
        <li><a class="link-bar" href="${Datas.links.menu}">MENÚ</a></li>
        <li><a class="link-bar" href="${Datas.links.contacto}">UBICACIÓN</a></li>
        <li class="li-phone">
          <span><i class="fa-solid fa-phone"></i>
          <a class="icon-phone" href="${Datas.redes.telefono}">(502+) 4663 - 2525</a></span>
        </li>
      </ul>
      <ul class="icon">
        <li><a href="${Datas.redes.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="${Datas.redes.facebook}" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="${Datas.redes.googlemap}" target="_blank"><i class="fa-solid fa-location-dot"></i></a></li>
        <li><a href="${Datas.redes.waze}" target="_blank"><i class="fa-brands fa-waze"></i></a></li>
      </ul>
    </nav>
    <!-- --- hamburger-responsive --- -->
    <button class="hamburger--collapse hamburger" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  `;

  fragment.appendChild(header);
  document.getElementById("header-render").appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderHeader);


