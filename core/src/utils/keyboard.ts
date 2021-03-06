
export function isTextInputFocused(): boolean {
  const activeElement = document.activeElement;
  if (isTextInput(activeElement) && activeElement.parentElement) {
    return activeElement.parentElement.querySelector(':focus') === activeElement;
  }
  return false;
}

export function closeKeyboard() {
  const activeElement = document.activeElement as HTMLElement;
  activeElement && activeElement.blur && activeElement.blur();
}

const NON_TEXT_INPUT_REGEX = /^(radio|checkbox|range|file|submit|reset|color|image|button)$/i;

function isTextInput(el: any) {
  return !!el &&
      (el.tagName === 'TEXTAREA'
      || el.contentEditable === 'true'
      || (el.tagName === 'INPUT' && !(NON_TEXT_INPUT_REGEX.test(el.type))));
}
