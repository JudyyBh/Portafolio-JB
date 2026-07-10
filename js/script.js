new Typed("#typed",{

    strings:[

        "Desarrolladora Web",

        "Ingeniera en TI",

        "Backend Developer",

        "Apasionada por la Tecnología"

    ],

    typeSpeed:60,

    backSpeed:40,

    backDelay:1500,

    loop:true

});
function crearLista(carpeta, total){

    let lista = [];

    for(let i = 1; i <= total; i++){

        lista.push(
            `img/proyectos/${carpeta}/${String(i).padStart(2,"0")}.png`
        );

    }

    return lista;

}const marketing = crearLista("marketing",18);

const escolar = crearLista("control",16);function iniciarCarrusel(imagenes, imgID, prev, next, dotsID){

    let actual = 0;

    const img = document.getElementById(imgID);

    const btnPrev = document.querySelector(prev);

    const btnNext = document.querySelector(next);

    const dots = document.getElementById(dotsID);

    let intervalo;

    // Crear indicadores

    imagenes.forEach((_,i)=>{

        const span = document.createElement("span");

        if(i==0) span.classList.add("active");

        dots.appendChild(span);

    });

    const indicadores = dots.querySelectorAll("span");

    function actualizar(){

        img.style.opacity="0";

        setTimeout(()=>{

            img.src=imagenes[actual];

            img.style.opacity="1";

        },250);

        indicadores.forEach(d=>d.classList.remove("active"));

        indicadores[actual].classList.add("active");

    }

    btnNext.onclick=()=>{

        actual++;

        if(actual>=imagenes.length){

            actual=0;

        }

        actualizar();

    };

    btnPrev.onclick=()=>{

        actual--;

        if(actual<0){

            actual=imagenes.length-1;

        }

        actualizar();

    };

    function autoplay(){

        intervalo=setInterval(()=>{

            actual++;

            if(actual>=imagenes.length){

                actual=0;

            }

            actualizar();

        },4000);

    }

    autoplay();

    img.parentElement.addEventListener("mouseenter",()=>{

        clearInterval(intervalo);

    });

    img.parentElement.addEventListener("mouseleave",()=>{

        autoplay();

    });

}iniciarCarrusel(
    marketing,
    "marketing-image",
    ".marketing-prev",
    ".marketing-next",
    "marketing-dots"
);

iniciarCarrusel(
    escolar,
    "control-image",
    ".control-prev",
    ".control-next",
    "control-dots"
);
const form = document.getElementById("contactForm");

const popup = document.getElementById("successPopup");

const button = document.getElementById("sendBtn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    button.classList.add("loading");

    button.innerHTML = `
        <i class="fa-solid fa-spinner"></i>
        <span>Enviando...</span>
    `;

    setTimeout(function(){

        form.reset();

        button.classList.remove("loading");

        button.innerHTML = `
            <i class="fa-solid fa-paper-plane"></i>
            <span>Enviar mensaje</span>
        `;

        popup.classList.add("show");

        setTimeout(function(){

            popup.classList.remove("show");

        },2500);

    },2000);

});const menuToggle=document.querySelector(".menu-toggle");

const menu=document.querySelector(".menu");

menuToggle.addEventListener("click",()=>{

    menu.classList.toggle("active");

});