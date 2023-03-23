'use strict'

const sections = document.querySelectorAll('.section')
const navLinks = document.querySelectorAll('.navbar__link')

window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY
    const offset = sec.offsetTop - 150
    const height = sec.offsetHeight
    const id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active')
        document
          .querySelector('.navbar__link[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })

  const header = document.querySelector('.header')

  header.classList.toggle('sticky', window.scrollY > 100)

  menuIcon.classList.remove('active-menu')
  navBar.classList.remove('active')
}

///////////////////////////////////////////////

const menuIcon = document.querySelector('.menu-icon')
const navBar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active-menu')
  navBar.classList.toggle('active')
})
