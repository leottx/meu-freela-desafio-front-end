// CONSTANTE
export const ACTIONS = {
  CHANGE_NAME: 'change-name',
  CHANGE_PHONE: 'change-phone',
  CHANGE_FORM_STATUS: 'change-form-status',
};

// Checa se o nome digitado eh valido
const checkName = (name) => {
  const REGEX_ALPHABET = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
  return name.length > 1 && REGEX_ALPHABET.test(name);
};

// Checa se o numero do telefone eh valido
const checkPhone = (phone) => {
  const REGEX_PHONE = /^[1-9]{2}\d{4,5}\d{4}$/;
  return REGEX_PHONE.test(phone);
};

export const reducerFn = (state, action) => {
  const newState = { ...state };
  const REGEX_CLEAN = /[()-\s]/g;
  switch (action.type) {
    case ACTIONS.CHANGE_NAME:
      newState.name = action.val.trim();
      newState.isNameValid = checkName(newState.name);
      break;
    case ACTIONS.CHANGE_PHONE:
      newState.phone = action.val.replace(REGEX_CLEAN, '');
      newState.isPhoneValid = checkPhone(newState.phone);
      break;
    case ACTIONS.CHANGE_FORM_STATUS:
      newState.isFormValid = state.isNameValid && state.isPhoneValid;
      break;
    default:
      return state;
  }
  return newState;
};
