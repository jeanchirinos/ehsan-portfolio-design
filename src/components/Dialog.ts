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
  dialog.classList.remove('open')
}
