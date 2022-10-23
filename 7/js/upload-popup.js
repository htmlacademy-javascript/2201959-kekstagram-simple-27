import './thumbnails.js';
import {commentValidate, uploadPictureForm} from './form-validate.js';
import {isEscKey} from './util.js';

const pictureEditForm = document.querySelector('.img-upload__overlay');
const uploadPictureButton = document.querySelector('#upload-file');
const closeEditFormButton = document.querySelector('.img-upload__cancel');

//Закрытие формы по ESC
const onEscDowm = (evt) => {
  if (isEscKey(evt)) {
    closeEditForm();
  }
};

//Функция открывающая форму редактирования фото
function openEditForm () {
  pictureEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscDowm);
  uploadPictureForm.addEventListener('submit', commentValidate);
}

//Функция закрывающая форму редактирования фото
function closeEditForm () {
  pictureEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploadPictureButton.value = '';
  document.removeEventListener('keydown', onEscDowm);
  uploadPictureForm.removeEventListener('submit', commentValidate);
}

//обрабочик на кнопку Загрузить
uploadPictureButton.addEventListener('change', () => {
  openEditForm();
});

//обработчик на кнопку Закрыть в форме редактирования фото
closeEditFormButton.addEventListener('click', () => {
  closeEditForm();
});

export {uploadPictureForm};
