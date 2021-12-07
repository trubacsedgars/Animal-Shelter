import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AnimalType = {
  name: { [key: string]: string }
  imgSrc: string
  species: string
}

const getAnimalList = () => {
  const animalList = localStorage.getItem('animals');
  if (animalList) {
    return JSON.parse(animalList);
  }
  return [{
    name: {
      en: 'Kovids',
    },
    species: 'cats',
    imgSrc: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip',
  }];
};

// const initialState = [{
//   name: {
//     en: 'cat',
//   },
//   species: 'cat',
//   imgSrc: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
// }] as AnimalType[];

export const animalsSlice = createSlice({
  name: 'animals',
  initialState: getAnimalList() as AnimalType[],
  reducers: {
    addNewAnimal: (state, { payload }: PayloadAction<AnimalType>) => {
      state.push(payload);
    },
  },
});

export const { addNewAnimal } = animalsSlice.actions;

export const { reducer } = animalsSlice;
