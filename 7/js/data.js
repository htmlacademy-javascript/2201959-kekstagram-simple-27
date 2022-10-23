import {getRandomNumber, getRandomArrayElement} from './util.js';

//описания фотографий
const DESCRIPTIONS = [
  'Это я на рыбалке',
  'Это я на работе',
  'Это я с друзьями',
  'Это я у своей машины',
  'А тут я дома уже',
];

//создание объекта описания к фото
const createPhotoDescription = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, 250),
  comments: getRandomNumber(0, 200)
});

//создание массива с объекатами
const getSimilarDescription = () => Array.from({length: 25}, (value, index) => createPhotoDescription(index));

export {getSimilarDescription};
