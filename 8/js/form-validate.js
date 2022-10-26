const uploadPictureForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__text__error',
});

const commentValidate = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

export {uploadPictureForm, commentValidate};
