import Button from '../Button/Button'
import './styles.css'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(5)
//   console.log(count)
//   console.log(setCount)
  const onMinusClick = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const onPlusClick = () => {
    setCount((prevValue) => prevValue + 1)
  }

  return (
    <div className="counter-component">
      <Button name="-" onClick={onMinusClick} />
      <div className="counter-result">{count}</div>
      <Button name="+" onClick={onPlusClick} />
    </div>
  )
}

export default Counter
