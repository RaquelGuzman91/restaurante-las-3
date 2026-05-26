import { Datas } from "./Data.js";//traigo mi lista centralizada

function setHeaderLinks() {
  Object.entries(Datas.links).forEach(([key, href]) => {//comvertir objetos en pares para que sea iterable
    const el = document.getElementById(`header-${key}`);//busca los elementos de header por su id
    if (el) el.href = href;//les asigna el href desde el array
  });

  Object.entries(Datas.redes).forEach(([key, href]) => {
    const el = document.getElementById(`red-${key}`);
    if (el) el.href = href;
  });
  
  Object.entries(Datas.info).forEach(([key, value]) => {
    const el = document.getElementById(`info-${key}`);
    if (el) {
        el.textContent = value;//solo muestra texto
    }
  });
  
}

document.addEventListener("DOMContentLoaded", setHeaderLinks);//se ejecuta al cargar la pagina asegura que el html este listo antes de antes de que el sript intente modificarlo

//object.entries convierte un objeto en array de pares [claves,valor]
//ejemplo {inicio: href inicios.html, nosotros: href nosotros.html}
// lo cambia a [[inicio, href etc], [nosotros, nosotros, href]]
//Datas.link recorre todo el array sin tener que escribir una por una
//forEach recorre todo recorre cada par cada clave valor
//key → el nombre de la propiedad (ej. "inicio", "nosotros")
//href → el valor de esa propiedad (ej. "index.html", "nosotros.html")
//Porque quiero que el id del HTML se construya dinámicamente con esa clave.
//Ejemplo: si la clave es "inicio", busco el elemento con id="header-inicio".


/*
const el = document.getElementById(\header-${key}\);
¿Qué hace?  
Busca el <a> en tu HTML cuyo id coincide con la clave.
Si key = "inicio", entonces busca header-inicio.
Si key = "nosotros", busca header-nosotros.
¿Por qué se hace así?  
Para no tener que escribir manualmente cada getElementById.
El bucle construye el nombre automáticamente según la clave.
*/

/*
if (el) el.href = href;
¿Qué hace?
if (el) → condicional que verifica si el elemento existe en el HTML.
el.href = href; → asigna el link desde tu objeto Datas.
¿Por qué el if?  
Porque puede que en tu HTML no exista algún id que está en el objeto.
Ejemplo: si tienes Datas.links.menu pero tu HTML no tiene id="header-menu", el if evita que el script falle.
*/

/*
Resumen de la lógica
Importar datos → Datas es tu lista centralizada.
Convertir objeto en pares → Object.entries lo vuelve iterable.
Recorrer cada par → forEach aplica la misma acción a todos.
Construir id dinámico → header-${key} conecta la clave con el HTML.
Condicional de seguridad → if (el) asegura que solo se cambien los que existen.
*/