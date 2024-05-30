import './styles.css'

// function Button() {
//   const buttonName = 'Get data'
// Лекция 2
// const sendButton = 'Send'
// const getButton = 'Get'
// const isGetButton = false
// const buttonClass = 'button-component'

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
// return (
//   <button className={buttonClass}>
//     {isGetButton ? getButton : sendButton}
//   </button>
// )

// }

// Лекция 3
// Вариант 4

// function Button(props)
// function Button({name = 'Get', isPrimary = true}) {
//   const buttonClass = isPrimary ? 'primary-buttom' : 'delete-buttom'
  // const buttonClass = props.isPrimary ? 'primary-buttom' : 'delete-buttom'
  // console.log(props);

//   return <button className={`button-component ${buttonClass}`}>{name}</button>
// }

function Button({name, type}) {
  
  return <button className="btn-component" type={type}>{name}</button>
}

export default Button
