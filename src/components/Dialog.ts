import { $ } from 'functions'

//? DIALOG
const dialog = $('dialog') as HTMLDialogElement

dialog.addEventListener('mousedown', onMouseDown)
dialog.addEventListener('mouseup', onMouseUp)

let mouseDownOnDialog = false

function onMouseDown(e: Event) {
  if (e.target === dialog) {
    mouseDownOnDialog = true
  } else {
    mouseDownOnDialog = false
  }
}

function onMouseUp() {
  if (mouseDownOnDialog) dialog.close()
}

//? INPUT / TEXTAREA
const input = $('input')
const textarea = $('textarea')

input?.addEventListener('focus', handleBlurFocus)
input?.addEventListener('blur', handleBlurFocus)

textarea?.addEventListener('focus', handleBlurFocus)
textarea?.addEventListener('blur', handleBlurFocus)

function handleBlurFocus(e: Event) {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement

  const label = $(`#${target.name}`)

  if (target.value) return
  label?.classList.toggle('selected')
}
