import { $ } from 'functions'

interface Props {
  children: JSX.Element
}

export default function Button({ children }: Props) {
  function handleClick() {
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
