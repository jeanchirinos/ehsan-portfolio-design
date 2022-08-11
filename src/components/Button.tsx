import { $ } from 'functions'

interface Props {
  children: JSX.Element
}

export default function Button({ children }: Props) {
  function handleClick() {
    const form = $('#contact-form') as HTMLFormElement
    Array.from(form.elements).forEach(element => element.removeAttribute('disabled'))

    $('dialog')?.classList.add('open')

    const mainInput = $('#contact-email') as HTMLInputElement
    mainInput.focus()
  }

  return (
    <button className='btn' onClick={handleClick}>
      {children}
    </button>
  )
}
