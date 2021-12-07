import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Animals from '../../components/Animals/Animals';
import { useAppSelector } from '../../store/hooks';

const Home = () => {
  const animals = useAppSelector((state) => state.animals);
  const language = useAppSelector((state) => state.language);
  const [activeItemSelected, setActiveItemSelected] = useState('All');
  const animalSpecies = animals.map(({ species }) => species);
  const uniqueSpecies = [...new Set(animalSpecies)];

  const filterItems = () => {
    if (activeItemSelected === 'All') {
      return animals;
    }
    return animals.filter((item) => item.species === activeItemSelected);
  };

  return (
    <div className="container">

      <div className="navigation-wrapper">
        <button
          className="navigation__button"
          onClick={() => setActiveItemSelected('All')}
        >
          All
        </button>
        {uniqueSpecies.map((item) => (
          <Navigation
            key={item}
            name={item}
            onClick={() => setActiveItemSelected(item)}
          />
        ))}
      </div>

      <div className="animals-gallery-wrapper">
        {filterItems().map(({ name, imgSrc, species }) => (
          <Animals
            key={imgSrc}
            animalImage={imgSrc}
            animalName={name[language]}
            animalSpecies={species}
          />
        ))}
      </div>

    </div>
  );
};

export default Home;
