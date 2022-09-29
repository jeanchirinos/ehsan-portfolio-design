import { $ } from 'functions'

interface Props {
  children: JSX.Element
}

export default function Button({ children }: Props) {
  async function handleClick() {
    // $('dialog')?.classList.add('open')
    // const mainInput = $('#contact-email') as HTMLInputElement
    // mainInput.focus()
    // let items = await navigator.clipboard.read()
    // for (let item of items) {
    //   if (!item.types.includes('text/html')) continue
    //   let reader = new FileReader()
    //   reader.addEventListener('load', loadEvent => {
    //     document.getElementById('html-output').innerHTML = reader.result
    //   })
    //   reader.readAsText(await item.getType('text/html'))
    //   break
    // }
    navigator.clipboard.readText().then(clipText => alert(clipText))
  }

  return (
    <div id='html-output'>
      <button className='btn' onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}
