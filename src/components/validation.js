// Ф для удаления ошибки при закрытии модального окна

function removeErrors(popup) {
  const errorsList = Array.from(popup.querySelectorAll('.popup__error'));
  const inputList = Array.from(popup.querySelectorAll('.popup__input'));

  errorsList.forEach(error => {
    error.textContent = '';
  })

  inputList.forEach(input => {
    input.classList.remove('popup__input_type_error');
  })
}

// Ф для проверки невалидных полей

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

// Ф для блокировки/разблокировки кнопки

function toggleButtonState(inputList, buttonElement) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_inactive');
    buttonElement.setAttribute('disabled', true);
  }
  else {
    buttonElement.classList.remove('popup__button_inactive');
    buttonElement.removeAttribute('disabled', true);
  }
}

// Ф для у установки слушаетелей на инпуты формы

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

// Ф для для включения валидации

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach(formElement => {
    setEventListeners(formElement);
  });
}

// Ф для показа ошибки валидации

function showError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add('popup__input_type_error');
}

// Ф для удаления ошибки валидации

function hideError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  inputElement.classList.remove('popup__input_type_error');
}

// Ф для проверки поля на валидность

function isValid(formElement, inputElement) {
  if(!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  }
  else if(inputElement.validity.valid) {
    hideError(formElement, inputElement);
  }
}

// export

export { removeErrors, enableValidation };