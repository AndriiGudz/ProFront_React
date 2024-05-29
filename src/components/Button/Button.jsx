import './styles.css'

function Button() {
  //   const buttonName = 'Get data'
  const sendButton = 'Send'
  const getButton = 'Get'
  const isGetButton = false
  const buttonClass = 'button-component'

  // Вариант 1
  //   return <button className={buttonClass}>{buttonName}</button>

  //   Вариант 2
  //   return (
  //     <div>
  //       <h2>Button</h2>
  //       <button className={buttonClass}>
  //         {isGetButton ? getButton : sendButton}
  //       </button>
  //     </div>
  //   )

  // Вариант 3
  return (
    <button className={buttonClass}>
      {isGetButton ? getButton : sendButton}
    </button>
  )
}

export default Button
