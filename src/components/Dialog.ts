import { $ } from 'functions'

// //? DIALOG
const dialog = $('dialog') as HTMLDialogElement

dialog.addEventListener('mousedown', onMouseDown)
dialog.addEventListener('mouseup', onMouseUp)

let mouseDownOnDialog = false

function onMouseDown(e: Event) {
  mouseDownOnDialog = e.target === e.currentTarget
}

function onMouseUp() {
  if (!mouseDownOnDialog) return

  const form = $('#contact-form') as HTMLFormElement
  Array.from(form.elements).forEach(element => element.setAttribute('disabled', 'true'))

  dialog.classList.remove('open')
}

// function handleClick(e: Event) {
//   if (e.target === dialog) dialog.classList.remove('open')
// }

// dialog.addEventListener('click', handleClick)
