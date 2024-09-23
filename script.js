let portafolioPersonal = document.title
window.addEventListener("blur", () => {
    portafolioPersonal = document.title
    document.title = "¡No te vayas! ¡Vuelve!"
});
window.addEventListener("focus", () => {
    document.title = portafolioPersonal
});
/*alternar la barra de navegacion de iconos */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// menu amburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Desplazamiento suave de los enlaces del menú
    const links = document.querySelectorAll('.navbar a');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Cerrar el menú después de hacer clic en un enlace (para la vista móvil)
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
            }
        });
    }
});

/* enlace activo de desplasamiento*/ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{ 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id  = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +'] ').classList.add('active');
            });

        };
    });

    //barra de navegacion

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*quitar el icono de alternacion y la barra de navegacion al hacer clic en el enlace de la barra de navegacion */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//boton de copiado
function copyToClipboard() {
    const email = document.querySelector(".btn[type='submit']").value;
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Correo electrónico copiado!");
      })
      .catch(err => {
        console.error("Error al copiar al portapapeles:", err);
        alert("No se pudo copiar al portapapeles. Intente nuevamente o copie manualmente.");
      });
  }
  


/*DESPLAZAMIENTO */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicios-container, .portafolio-box, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .hacerca-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .hacerca-content', { origin: 'right' });

//MULTIPLE

    const typed = new typed('.multiple-text' , {
        String: ['Frontend Developer' , 'aprendizaje continuo','pensamiento critico'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });    