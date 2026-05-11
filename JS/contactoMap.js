function crearMap() {
    const contact = document.createElement("article");
    contact.innerHTML = `
        <h3>contacto</h3>
        <h4>Telefono: (+502) 4663-2525</h4>
        <p>Un espacio ideal para tus eventos especiales, comunicate con nosotros.</p>
        <p>6A Avenida Norte 43A Antigua, Guatemala </p>
        <article class="icon-i">
            <a href="https://maps.app.goo.gl/MMUxHsBu43NsLcEP9" target="_blank"><i class="fa-solid fa-location-dot"></i></a>
            <a href="https://ul.waze.com/ul?place=ChIJ54CuboYPiYURfU1Qzjw8-v4&ll=14.56203210%2C-90.73510210&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank"><i class="fa-brands fa-waze"></i></a>
        </article>
        <article class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.649378684261!2d-90.73510209999999!3d14.562032100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890f866eae80e7%3A0xfefa3c3cce504d7d!2sLas%20Tres%20Amigas!5e0!3m2!1ses-419!2sgt!4v1774306948359!5m2!1ses-419!2sgt" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </article>
    `;

    document.getElementById("render-map").appendChild(contact);
}

crearMap();