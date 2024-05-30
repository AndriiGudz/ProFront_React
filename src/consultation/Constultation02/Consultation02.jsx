import Select from '../../components/Select/Select'
import './styles.css'

function Consultation02() {
  return (
    <div className="consul-component">
      <h2>Data Form</h2>
      <Select name="userGender" labelName="Gender" idSelect="idGender">
        <option value="man">Мужчина</option>
        <option value="woman">Женщина</option>
      </Select>
      <Select name="userCity" labelName="City" idSelect="idCity">
        <option>Berlin</option>
        <option>Munhen</option>
        <option>Leipcig</option>
      </Select>
    </div>
  )
}

export default Consultation02
