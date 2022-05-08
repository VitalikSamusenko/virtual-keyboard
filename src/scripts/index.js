/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import '../assets/styles/style.scss';

const body = document.querySelector('body');

function createElement(parent, el, className) {
  var elem = document.createElement(el);
  elem.className = className;
  parent.appendChild(elem);
  return elem;
}

const container = createElement(body, 'div', 'container');

const h1 = createElement(container, 'h1', 'title');
h1.textContent = 'Virtual keyboard';

const textWrapper = createElement(container, 'div', 'text-wrapper');

const switchLang = createElement(textWrapper, 'div', 'text-wrapper__lang');
switchLang.textContent = 'Change Language: Shift + Alt';

const madeFor = createElement(textWrapper, 'div', 'text-wrapper__made');
madeFor.textContent = 'Made for: Windows';

const textArea = createElement(container, 'textarea', 'textarea');

const keyboardWrapper = createElement(container, 'div', 'keyboard-wrapper');

const RU = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];
const EN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];

const shiftedRU = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];

const shiftedEN = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '}', '}', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\'', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];
const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];

let currentLang = RU;

function createButtons(arr) {
  keyboardWrapper.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const keyboardRow = createElement(keyboardWrapper, 'div', 'keyboard__row');
    for (let j = 0; j < arr[i].length; j++) {
      const keyboardButton = createElement(keyboardRow, 'div', 'keyboard__button');
      keyboardButton.innerHTML = arr[i][j];
      keyboardButton.dataset.code = keyCode[i][j];
      if (arr[i][j] == 'Tab')keyboardButton.classList.add('keyboard__button_tab');
      else if (arr[i][j] == 'CapsLock')keyboardButton.classList.add('keyboard__button_caps');
      else if (arr[i][j] == 'Shift')keyboardButton.classList.add('keyboard__button_shift');
      else if (arr[i][j] == 'Ctrl')keyboardButton.classList.add('keyboard__button_ctrl');
      else if (arr[i][j] == 'Alt')keyboardButton.classList.add('keyboard__button_alt');
      else if (arr[i][j] == 'Enter')keyboardButton.classList.add('keyboard__button_enter');
      else if (arr[i][j] == 'Backspace')keyboardButton.classList.add('keyboard__button_backspace');
      else if (arr[i][j] == 'Del')keyboardButton.classList.add('keyboard__button_del');
      else if (arr[i][j] == ' ')keyboardButton.classList.add('keyboard__button_space');
      else if (arr[i][j] == 'Win')keyboardButton.classList.add('keyboard__button_win');
      else if (arr[i][j] == '&#9650;')keyboardButton.classList.add('keyboard__button_arrUp');
      else if (arr[i][j] == '&#9668;')keyboardButton.classList.add('keyboard__button_arrLeft');
      else if (arr[i][j] == '&#9660;')keyboardButton.classList.add('keyboard__button_arrDown');
      else if (arr[i][j] == '&#9658;')keyboardButton.classList.add('keyboard__button_arrRight');
      else keyboardButton.classList.add('keyboard__button_letter');
    }
  }
}
createButtons(currentLang);

const kb = document.querySelectorAll('.keyboard__button');

function changeKeyboard(arr) {
  let numOfButton = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      kb[numOfButton].innerHTML = arr[i][j];
      numOfButton++;
    }
  }
}

const buttons = document.querySelectorAll('.keyboard__button');
const buttonsLetter = document.querySelectorAll('.keyboard__button_letter');
buttonsLetter.forEach(b => b.addEventListener('click', () => {
  textArea.textContent += b.textContent;
  textArea.focus();
  textArea.setSelectionRange(textArea.textContent.length, textArea.textContent.length);
}));

const buttonSpace = document.querySelector('.keyboard__button_space');
buttonSpace.addEventListener('click', () => {
  textArea.textContent += ' ';
  textArea.focus();
  textArea.setSelectionRange(textArea.textContent.length, textArea.textContent.length);
});

const buttonTab = document.querySelector('.keyboard__button_tab');
buttonTab.addEventListener('click', () => {
  textArea.textContent += '\t';
  textArea.focus();
  textArea.setSelectionRange(textArea.textContent.length, textArea.textContent.length);
});

let isCaps = false;

function createEventListenersFoKeyboard() {
  document.addEventListener('keydown', function (event) {
    if (event.key.length == 1) {
      for (let i = 0; i < keyCode.length; i++) {
        for (let j = 0; j < keyCode[i].length; j++) {
          if (keyCode[i][j] == event.code) {
            if (currentLang == RU && !isCaps) {
              textArea.textContent += RU[i][j];
            } else if (currentLang == RU && isCaps) {
              textArea.textContent += shiftedRU[i][j];
            } else if (currentLang == EN && !isCaps) {
              textArea.textContent += EN[i][j];
            } else if (currentLang == EN && isCaps) {
              textArea.textContent += shiftedEN[i][j];
            }
          }
        }
      }
      textArea.focus();
      textArea.setSelectionRange(textArea.textContent.length, textArea.textContent.length);
    }
    if (event.key == 'Tab') {
      textArea.textContent += '\t';
      textArea.focus();
      textArea.setSelectionRange(textArea.textContent.length, textArea.textContent.length);
    }
    event.stopPropagation();
    event.preventDefault();
    buttons.forEach(button => {
      if (event.code == button.dataset.code && event.key !== 'CapsLock') {
        button.classList.add('active');
      }
      if (event.key == 'CapsLock' && button.textContent == 'CapsLock') {
        button.classList.toggle('active');
      }
    });
  });
  document.addEventListener('keyup', function (event) {
    event.stopPropagation();
    event.preventDefault();
    buttons.forEach(button => {
      if (event.code == button.dataset.code && event.key !== 'CapsLock') {
        button.classList.remove('active');
      }
    });
  });
}

createEventListenersFoKeyboard();
const buttonCaps = document.querySelector('.keyboard__button_caps ');
// Shift
let qwe = 0;
document.addEventListener('keydown', function (event) {
  event.stopPropagation();
  event.preventDefault();
  if (event.key == 'Shift' && qwe == 0) {
    qwe++;
    if (currentLang == RU && !isCaps) {
      changeKeyboard(shiftedRU);
      isCaps = true;
    } else if (currentLang == RU && isCaps) {
      changeKeyboard(RU);
      isCaps = false;
    }
    if (currentLang == EN && !isCaps) {
      changeKeyboard(shiftedEN);
      isCaps = true;
    } else if (currentLang == EN && isCaps) {
      changeKeyboard(EN);
      isCaps = false;
    }
    buttonCaps.classList.remove('active');
  }
});

document.addEventListener('keyup', function (event) {
  qwe = 0;
  if (event.key == 'Shift') {
    if (currentLang == RU && isCaps) {
      changeKeyboard(RU);
      isCaps = false;
    }
    if (currentLang == EN && isCaps) {
      changeKeyboard(EN);
      isCaps = false;
    }
  }
});

// Capslock
document.addEventListener('keydown', function (event) {
  event.stopPropagation();
  event.preventDefault();
  if (event.key == 'CapsLock') {
    qwe++;
    if (currentLang == RU && !isCaps) {
      changeKeyboard(shiftedRU);
      isCaps = true;
    } else if (currentLang == RU && isCaps) {
      changeKeyboard(RU);
      isCaps = false;
    }
    if (currentLang == EN && !isCaps) {
      changeKeyboard(shiftedEN);
      isCaps = true;
    } else if (currentLang == EN && isCaps) {
      changeKeyboard(EN);
      isCaps = false;
    }
  }
});

// Shift on virtual keyboard
const buttonsShift = document.querySelectorAll('.keyboard__button_shift');

buttonsShift.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('active');
    buttonCaps.classList.remove('active');
    const buttonsAlt = document.querySelectorAll('.keyboard__button_alt');
    function changeLanguage() {
      if (currentLang == RU) {
        currentLang = EN;
        changeKeyboard(currentLang);
      } else if (currentLang == EN) {
        currentLang = RU;
        changeKeyboard(currentLang);
      }
      isCaps = false;
      button.classList.remove('active');
      buttonsAlt.forEach(buttonA =>{
        buttonA.removeEventListener('click', changeLanguage);
      });
    }
    buttonsAlt.forEach(buttonA =>{
      buttonA.addEventListener('click', changeLanguage);
    });
  });
});

buttonsShift.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('active');
    if (currentLang == RU) {
      changeKeyboard(shiftedRU);
    } else if (currentLang == EN) {
      changeKeyboard(shiftedEN);
    }
    isCaps = true;
    function changeCaps() {
      if (isCaps && currentLang == RU) {
        changeKeyboard(RU);
        isCaps = false;
      } else if (isCaps && currentLang == EN) {
        changeKeyboard(EN);
        isCaps = false;
      }
      button.classList.remove('active');
      buttonsLetter.forEach(buttonL => {
        buttonL.removeEventListener('click', changeCaps);
      });
      isCaps = false;
    }
    buttonsLetter.forEach(buttonL => {
      buttonL.addEventListener('click', changeCaps);
    });
  });
});

buttonCaps.addEventListener('click', () => {
  buttonCaps.classList.toggle('active');
  if (currentLang == RU && !isCaps) {
    changeKeyboard(shiftedRU);
    isCaps = true;
  } else if (currentLang == RU && isCaps) {
    changeKeyboard(RU);
    isCaps = false;
  }
  if (currentLang == EN && !isCaps) {
    changeKeyboard(shiftedEN);
    isCaps = true;
  } else if (currentLang == EN && isCaps) {
    changeKeyboard(EN);
    isCaps = false;
  }
});