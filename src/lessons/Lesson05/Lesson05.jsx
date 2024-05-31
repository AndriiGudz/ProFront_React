import './styles.css'
import { animalServerData } from './data'
import AnimalCard from '../../components/AnimalCard/AnimalCard'
import { v4 } from 'uuid'

function Lesson05() {
  const animalCards = animalServerData.map((item) => {
    return <AnimalCard key={v4()} animalData={item} />
  })

  return (
    <div className="lesson05">
      {/* 1 вариант */}
      {/* <AnimalCard animalData={animalServerData[0]} />
            <AnimalCard animalData={animalServerData[1]} />
            <AnimalCard animalData={animalServerData[2]} />
            <AnimalCard animalData={animalServerData[3]} /> */}

      {/* 2 вариант */}
      {animalCards}

      {/* 3 вариант */}
      {/* {animalServerData.map((item) => {
    return <AnimalCard animalData={item} />
  })} */}
    </div>
  )
}

export default Lesson05
