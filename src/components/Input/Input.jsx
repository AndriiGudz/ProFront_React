import './styles.css'

function Input({ name, type = 'text', placeholder, label }) {
  return (
    <div className="input-container">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        className="input-field"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        label={label}
      />
    </div>
  )
}

export default Input
