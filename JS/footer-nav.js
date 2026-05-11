function crearfooterNav () {
    const footernav = document.createElement("footer-nav");
    footernav.innerHTML =`
        <a href="#">&copy;RESTAURANTELAS TRES AMIGAS | desarrollo web 2025</a>
    `;
    document.getElementById("copyright").appendChild(footernav);
}

crearfooterNav();