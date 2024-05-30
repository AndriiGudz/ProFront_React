import './styles.css'

function Select({ idSelect, name, labelName, children }) {
  // console.log(idSelect);

  return (
    <div className="select-element">
      {labelName ? (
        <label htmlFor={idSelect} className="label">
          {labelName}
        </label>
      ) : (
        null
      )}

      <select id={idSelect} name={name} className="select">
        {children}
      </select>
    </div>
  )
}

export default Select
