const d = document;

const headerBg = d.querySelector(".header");
const panelIsActive = d.querySelector(".links");



export default function menuHamburger(btnHamburger, nav, linkBar) {
    d.addEventListener("click", (e) => {
        if(e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`) ){
            d.querySelector(nav).classList.toggle("is-active");
            d.querySelector(btnHamburger).classList.toggle("is-active")
        }
        if(e.target.matches(linkBar)) {
            e.preventDefault();
            d.querySelector(nav).classList.remove("is-active");
            d.querySelector(btnHamburger).classList.remove("is-active");

            setTimeout(() =>{
                window.location.href = e.target.href;
            }, 600);
        }else{
            headerBg.classList.add()
        }
    });
}

