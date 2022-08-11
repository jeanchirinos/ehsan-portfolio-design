import { $ } from 'functions'

interface Props {
  children: JSX.Element
}

export default function Button({ children }: Props) {
  function handleClick() {
    $('dialog')?.classList.add('open')
  }

  return (
    <button className='btn' onClick={handleClick}>
      {children}
    </button>
  )
}
