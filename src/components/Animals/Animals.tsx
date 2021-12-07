import './Animals.scss';
import { FC } from 'react';

type AnimalsProps = {
  animalImage: string,
  animalName: string,
  animalSpecies: string
}

const Animals:FC<AnimalsProps> = ({ animalImage, animalName, animalSpecies }) => (

  // if (Number(animals.length === 0)) {
  //   return <span style={{ textAlign: 'center', color: 'black' }}>No animals added yet</span>;
  // }

  <div>
    <div className="animals__gallery">
      <img
        className="animals__gallery-image"
        src={animalImage}
        alt="animal"
      />
    </div>
    <div className="animals__gallery-content">
      <span className="animals__gallery-content-name">{animalName}</span>
      <span className="animals__gallery-content-species">{animalSpecies}</span>
    </div>
  </div>

  // <div className="card-wrapper">
  //   {animals.map(({ name, species, imgSrc }) => (
  //     <div
  //       className="cards"
  //       key={imgSrc}
  //     >
  //       <img
  //         className="cards__image"
  //         src={imgSrc}
  //         alt={name[language]}
  //         width={350}
  //       />
  //       <div className="cards__content">
  //         <span className="cards__content-name">
  //           {name[language]}
  //         </span>
  //         <span className="cards__content-species">
  //           {species}
  //         </span>
  //       </div>
  //     </div>
  //   ))}
  // </div>
);

export default Animals;
