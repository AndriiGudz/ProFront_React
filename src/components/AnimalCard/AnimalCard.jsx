import "./styles.css";

function AnimalCard({ animalData }) {
  return (
    <div class="animal-card-wrapper">
      <h2>{animalData.name}</h2>
      <p>{animalData.species}</p>
      <p>{animalData.role}</p>
      <img src={animalData.image} />
    </div>
  );
}

export default AnimalCard;