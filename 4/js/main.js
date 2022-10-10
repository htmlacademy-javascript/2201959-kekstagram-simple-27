//Получаем рандомное число
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

};

//Проверяем максимальную длину строки
const checkMaxCommentLength = (comment, maxLength) => comment.length <= maxLength;


// getRandomNumber();
// checkMaxCommentLength();

//описания фотографий
const DESCRIPTIONS = [
  'Это я на рыбалке',
  'Это я на работе',
  'Это я с друзьями',
  'Это я у своей машины',
  'А тут я дома уже',
];

//получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

//создание объекта описания к фото
const createPhotoDescription = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, 250),
  comments: getRandomNumber(0, 200)
});

//создание массива с объекатами, добавление id и url
const getSimilarDescription = () => Array.from({length: 25}, (value, index) => createPhotoDescription(index));

getSimilarDescription();
