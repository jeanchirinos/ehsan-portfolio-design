import { $ } from 'functions'

interface Props {
  children: JSX.Element
}

export default function Button({ children }: Props) {
  function handleClick() {
    const dialog = $('dialog') as HTMLDialogElement
    dialog.showModal()
  }

  return (
    <button className='btn' onClick={handleClick}>
      {children}
    </button>
  )
}
