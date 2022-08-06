interface Props {
  children: JSX.Element
}

export default function Button({ children }: Props) {
  function handleClick() {
    document.querySelector('dialog')?.showModal()
  }

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  )
}
