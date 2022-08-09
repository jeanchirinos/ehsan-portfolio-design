import { $ } from 'functions'

const menu = $('#menu') as HTMLElement
const works = $('#works') as HTMLElement

works.addEventListener('click', (e: any) => {
  menu.focus()
  e.target.classList.add('selected')
})

menu.addEventListener('blur', () => {
  works.classList.remove('selected')
})

// WORKS
// const menu = $('#menu') as HTMLElement
// let canFocus = true

// $('#works')?.addEventListener('click', () => {
//   if (canFocus) {
//     menu.focus()
//     canFocus = false
//   }
// })

// menu.addEventListener('blur', () => {
//   setTimeout(() => {
//     canFocus = true
//   }, 200)
// })
