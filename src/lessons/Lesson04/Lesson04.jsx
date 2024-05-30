import Button from '../../components/Button/Button'
import Counter from '../../components/Counter/Counter'
import './styles.css'

function Lesson04() {
  //   const showMessage = () => {
  //     alert('Func Outer Click')
  //   }

  //   const showName = (name) => {
  //     alert(`Hello, ${name}`)
  //   }

  //   return (
  //     <div className="lesson04-container">
  //       <Button name="Func Inner" onClick={() => alert('Func Inner Click')} />
  //       <Button name="Func Outer" onClick={showMessage} />
  //       <Button name="Func With Param" onClick={() => showName('Tom')} />
  //     </div>
  //   )
  return <div className="lesson04-container">
    <Counter />
  </div>
}

export default Lesson04
