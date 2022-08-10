import { $ } from 'functions'

const button = $('#mobile-menu')
const menu = $('#mobile-nav')

button?.addEventListener('click', () => {
  menu?.classList.toggle('opened')
  document.body.style.overflow = menu?.classList.contains('opened') ? 'hidden' : 'auto'
})

const hasChildren = $('.hasChildren')
const children = $('.children')

hasChildren?.addEventListener('click', () => {
  children?.classList.toggle('show')
})
