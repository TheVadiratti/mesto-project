const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorSelector: '.popup__error'
}

function enableValidation(prmObject) {
  const formList = Array.from(document.querySelectorAll(prmObject.formSelector));
  formList.forEach(formElement => {
    setEventListeners(formElement, prmObject);
  })
}

// Ф для у установки слушаетелей на инпуты формы

function setEventListeners(formElement, prmObject) {
  const inputList = Array.from(formElement.querySelectorAll(prmObject.inputSelector));
  const buttonElement = formElement.querySelector(prmObject.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, prmObject);
  
  inputList.forEach(inputElement => {
    isValid(formElement, inputElement, prmObject);
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, prmObject);
      toggleButtonState(inputList, buttonElement, prmObject);
    })
  })
}

// Ф для удаления ошибки при закрытии модального окна

function removeErrors(popup, prmObject) {
  const errorsList = Array.from(popup.querySelectorAll(prmObject.errorSelector));
  const inputList = Array.from(popup.querySelectorAll(prmObject.inputSelector));
  errorsList.forEach(error => {
    error.textContent = '';
  })

  inputList.forEach(input => {
    input.classList.remove(prmObject.inputErrorClass);
  })
}

// Ф для проверки невалидных полей

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
}

// Ф для блокировки/разблокировки кнопки

function toggleButtonState(inputList, buttonElement, prmObject) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(prmObject.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  }
  else {
    buttonElement.classList.remove(prmObject.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true);
  }
}

// Ф для показа ошибки валидации

function showError(formElement, inputElement, errorMessage, prmObject) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(prmObject.inputErrorClass);
}

// Ф для удаления ошибки валидации

function hideError(formElement, inputElement, prmObject) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  inputElement.classList.remove(prmObject.inputErrorClass);
}

// Ф для проверки поля на валидность

function isValid(formElement, inputElement, prmObject) {
  if(!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, prmObject);
  }
  else {
    hideError(formElement, inputElement, prmObject);
  }
}

// export

export { removeErrors, parameters, enableValidation };