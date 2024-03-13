const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

function downloadResume() {
    var driveLink = 'https://drive.google.com/file/d/1J8Gf_rXQyN2ZoevhoMLqHyDSON6mtkHF/view?usp=sharing';
    var fileId = driveLink.match(/\/d\/(.+?)\//)[1];
    var downloadUrl = 'https://drive.google.com/uc?id=' + fileId;
    var link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'Anzil_Abdul_Hakkim-Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

$(document).ready(function(){
    $(".carousel").owlCarousel({
      items: 2, 
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      responsive: {
        0: {
          items: 1 
        },
        1000: {
          items: 2 
        }
    }
    });
});

sr.reveal('.home__data, .about__img',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 