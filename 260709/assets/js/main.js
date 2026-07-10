/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Hide menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('nav-menu')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove(n => n.addEventListener('click', linkAction))
}

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrillHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // Add the .scroll-header class if the bottom scroll of the view
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home")
// and activate the link with the class .active-link
const scrollActive = () => {
    // We get the position by scrolling down
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id,
              top = section.offsetTop - 50,
              height = section.offsetHeight,
              link = document.querySelector('.nav__menu a[href*=' + id + ']')

        if(!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

