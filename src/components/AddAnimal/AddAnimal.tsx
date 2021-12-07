import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addNewAnimal } from '../../store/animalsSlice';
import './AddAnimal.scss';
import Button from '../Button/Button';

const AddAnimal = () => {
  const animalsData = useAppSelector(({ animals }) => {
    const animalSpecies = animals.map(({ species }) => species);
    return [...new Set(animalSpecies)];
  });

  const animals = useAppSelector((state) => state.animals);
  const language = useAppSelector((state) => state.language);
  const [isSpeciesVisible, setIsSpeciesVisible] = useState(false);
  const [animalFormData, setAnimalFormData] = useState({
    name: { [language]: '' },
    imgSrc: '',
    species: '',
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animals));
  }, [animals]);

  const keyPress = useCallback((e) => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <div className={`${showModal ? 'overlay' : ''}`}>
      {showModal && (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addNewAnimal(animalFormData));
            setShowModal(false);
          }}
        >
          <span className="form__heading">
            Add Animal
          </span>
          <span
            className="close-modal"
            onClick={() => setShowModal(false)}
          >
            x
          </span>
          <label
            className="form__wrapper"
            htmlFor="name"
          >
            <span className="form__content">
              Name
            </span>
            <input
              className="form__input"
              name="name"
              type="text"
              placeholder="Animal name"
              onChange={(e) => {
                setAnimalFormData({
                  ...animalFormData,
                  name: {
                    [language]: e.target.value,
                  },
                });
              }}
            />
          </label>
          <label
            className="form__wrapper"
            htmlFor="image"
          >
            <span className="form__content">
              Image source
            </span>
            <input
              className="form__input"
              type="text"
              name="image"
              placeholder="Animal image"
              onChange={(e) => {
                setAnimalFormData({
                  ...animalFormData,
                  imgSrc: e.target.value,
                });
              }}
            />
          </label>
          <label
            className="form__wrapper"
            htmlFor="species"
          >
            <div className="form_content-wrapper">
              <span className="form__content">
                Species
              </span>
              <Button
                type="button"
                name={!isSpeciesVisible ? 'add' : 'select'}
                onClick={() => setIsSpeciesVisible(!isSpeciesVisible)}
              />
            </div>
            {isSpeciesVisible
              ? (
                <input
                  className="form__input"
                  placeholder="Add new species"
                  type="text"
                  onChange={(e) => {
                    setAnimalFormData({
                      ...animalFormData,
                      species: e.target.value,
                    });
                  }}
                />
              ) : (
                <label
                  className="form__wrapper"
                  htmlFor="species"
                >
                  <select
                    className="form__input-select"
                    name="species"
                    onChange={(e) => {
                      setAnimalFormData({
                        ...animalFormData,
                        species: e.target.value,
                      });
                    }}
                  >
                    {animalsData.map((species) => (
                      <option
                        key={species}
                        value={species}
                      >
                        {species}
                      </option>
                    ))}
                  </select>
                </label>
              )}
          </label>
          <button
            className="button-icons"
          >
            <FontAwesomeIcon
              className="button-icons-icon"
              icon={faPlus}
            />
          </button>
        </form>
      )}
      <div className="button-wrapper-icons">
        <button
          className="button"
          onClick={() => setShowModal(true)}
          style={{ display: showModal ? 'none' : 'inline-flex' }}
        >
          Add animal
        </button>
      </div>
    </div>
  );
};

export default AddAnimal;
