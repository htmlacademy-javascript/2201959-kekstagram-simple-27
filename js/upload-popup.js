import {onFormSubmitButton, uploadPictureForm, pristine} from './form-validate.js';
import {isEscKey} from './util.js';
import {resetEffects} from './picture-effects.js';

const pictureEditForm = document.querySelector('.img-upload__overlay');
const uploadPictureButton = document.querySelector('#upload-file');
const closeEditFormButton = document.querySelector('.img-upload__cancel');

//Закрытие формы по ESC
const onEscDown = (evt) => {
  if (isEscKey(evt)) {
    closeEditForm();
  }
};

//Функция открывающая форму редактирования фото
function openEditForm () {
  pictureEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscDown);
  uploadPictureForm.addEventListener('submit', onFormSubmitButton);
}

//Функция закрывающая форму редактирования фото
function closeEditForm () {
  if (!document.body.contains(document.querySelector('.error'))) {
    pictureEditForm.classList.add('hidden');
    document.body.classList.remove('modal-open');

    resetEffects();
    uploadPictureForm.reset();
    pristine.reset();

    document.removeEventListener('keydown', onEscDown);
    uploadPictureForm.removeEventListener('submit', onFormSubmitButton);
  }
}

//обрабочик на кнопку Загрузить
uploadPictureButton.addEventListener('change', () => {
  openEditForm();
});

//обработчик на кнопку Закрыть в форме редактирования фото
closeEditFormButton.addEventListener('click', () => {
  closeEditForm();
});

export {uploadPictureForm, closeEditForm};
