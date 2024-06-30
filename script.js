
        // JavaScript to handle the active class
        document.querySelectorAll('.nav__list a').forEach(item => {
            item.addEventListener('click', event => {
                // Remove the active class from all items
                document.querySelectorAll('.nav__list a').forEach(link => {
                    link.classList.remove('active-link');
                });

                // Add the active class to the clicked item
                event.target.classList.add('active-link');
            });
        });




/*=============== SHOW MENU ===============*/
/** const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
**/
/*===== MENU SHOW =====*/
/* Validate if constant exists */
/** if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
    **/


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
/** if(navClose){
 navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
} **/

/*=============== REMOVE MENU MOBILE ===============*/
/** const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction)) **/

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

/** function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive) **/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)


var active=1;
var next=1;

setInterval(function(){
    next=next+1;
    if(next<6){
        document.getElementById("img"+active).classList.replace("visible","hidden");
        document.getElementById("img"+next).classList.replace("hidden","visible");
        active=next;
    }
    else{
        document.getElementById("img"+active).classList.replace("visible","hidden");
        document.getElementById("img"+next).classList.replace("hidden","visible");
        active=6;
        next=0;
    }
},1000);

window.addEventListener('scroll', function() {
    var timelineItems = document.querySelectorAll('.timeline__item');
    var windowHeight = window.innerHeight;

    // Find the currently visible timeline item
    var currentYear = null;
    var firstVisibleItem = null;
    timelineItems.forEach(function(item) {
        var rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < windowHeight && !firstVisibleItem) {
            currentYear = item.querySelector('.timeline__section-title').textContent.trim();
            firstVisibleItem = item;
        }
    });

    // Remove existing highlight from all dots
    timelineItems.forEach(function(item) {
        item.classList.remove('highlight');
    });

    // Add highlight to the first visible timeline item
    if (firstVisibleItem) {
        firstVisibleItem.classList.add('highlight');
    }
});


// window.addEventListener('scroll', function() {
//     const video = document.getElementById('video1');
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;

//     // Scale the image down as you scroll down
//     if (scrollPosition <= windowHeight) {
//         const scale = 1.1 - (scrollPosition / windowHeight) * 0.5; // Adjust the scaling factor as needed
//         video.style.transform = `scale(${scale})`;
//     }
// });
window.addEventListener('scroll', function() {
    const video = document.getElementById('video1');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition <= windowHeight) {
        const scale = 1 + (scrollPosition / windowHeight) * 0.5;
        video.style.transform = `scale(${scale}) translateY(-50%)`;
    }
    
});


