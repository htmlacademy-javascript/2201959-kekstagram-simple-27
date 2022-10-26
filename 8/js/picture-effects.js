import {photoPreview} from './picture-scale.js';

const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

sliderContainer.style.display = 'none';
let currentEffect = '';
let currentSuffix = '';
const DEFAULT_START = 100;

const sliderOptions = {
  'none': {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    suffix: '',
    display: 'none',
  },
  'chrome': {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'grayscale',
    suffix: '',
    display: 'block',
  },
  'sepia': {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    filter: 'sepia',
    suffix: '',
    display: 'block',
  },
  'marvin': {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    filter: 'invert',
    suffix: '%',
    display: 'block',
  },
  'phobos': {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    filter: 'blur',
    suffix: 'px',
    display: 'block',
  },
  'heat': {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    filter: 'brightness',
    suffix: '',
    display: 'block',
  },


};

const updateSliderOptions = ({range: {min, max}, step, filter, suffix, display}) => {
  currentEffect = filter;
  currentSuffix = suffix;

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max
    },
    step: step,
    start: DEFAULT_START,
  });

  sliderContainer.style.display = display;
};


//Создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

//Получение значения слайдера
sliderElement.noUiSlider.on('update', () => {
  const value = sliderElement.noUiSlider.get();

  photoPreview.style.filter = `${currentEffect}(${value}${currentSuffix})`;
  sliderValue.setAttribute('value', value);
});

//Сброс эффектов
const resetEffects = () => {
  photoPreview.classList = '';
  photoPreview.style.transform = '';
  photoPreview.style.filter = '';

  updateSliderOptions(sliderOptions.none);
};


//Смена эффекта
const changeEffect = (evt) => {
  photoPreview.classList = '';
  photoPreview.style.filter = '';
  if (evt.target.value !== 'none') {
    photoPreview.classList.add(`effects__preview--${evt.target.value}`);
  }

  updateSliderOptions(sliderOptions[evt.target.value]);
};

effectsList.addEventListener('click', changeEffect);


export {resetEffects};

