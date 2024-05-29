import AnimalCard from '../../components/AnimalCard/AnimalCard'
import Button from '../../components/Button/Button'
import './styles.css'
import { lionData, zebraData, normaliseData } from './data'

function Lesson03() {
  return (
    <div className="lesson03-container">
      <AnimalCard
        animalData={lionData}
        animalName={normaliseData(lionData.name)}
      >
        <p>{lionData.skills[0]}</p>
        <div>{lionData.skills[1]}</div>
      </AnimalCard>
      <AnimalCard
        animalData={zebraData}
        animalName={normaliseData(zebraData.name)}
      />
      <Button />
      <Button name="Delete" isPrimary={false} />
    </div>
  )
}

export default Lesson03
