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
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'c', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];
const EN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];
const shiftedFirstRowEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const shiftedFirstRowRU = ['Ё', '1', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
function createButtons(arr) {
  keyboardWrapper.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const keyboardRow = createElement(keyboardWrapper, 'div', 'keyboard__row');
    for (let j = 0; j < arr[i].length; j++) {
      const keyboardButton = createElement(keyboardRow, 'div', 'keyboard__button');
      keyboardButton.innerHTML = arr[i][j];
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
createButtons(EN);

const buttons = document.querySelectorAll('.keyboard__button');
const buttonsLetter = document.querySelectorAll('.keyboard__button_letter');
buttonsLetter.forEach(b => b.addEventListener('click', () => {
  textArea.textContent += b.textContent;
}));

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key.length == 1) {
    textArea.textContent += event.key;
}
  event.stopPropagation();
  event.preventDefault();
  buttons.forEach(button => {
    // console.log(event);

    if (event.key == button.textContent) {
      button.classList.add('active');
    }
    if ((event.key == 'Control' && button.textContent == 'Ctrl') || (event.key == 'Control' && button.textContent == 'Ctrl')
    || (event.key == 'Delete' && button.textContent == 'Del') || (event.key == 'Meta' && button.textContent == 'Win')
    || (event.key == 'ArrowUp' && button.textContent == '▲') || (event.key == 'ArrowLeft' && button.textContent == '◄')
    || (event.key == 'ArrowDown' && button.textContent == '▼') || (event.key == 'ArrowRight' && button.textContent == '►')) {
      button.classList.add('active');
    }
  });
});

document.addEventListener('keyup', function (event) {
  event.stopPropagation();
  event.preventDefault();
  buttons.forEach(button => {
    // console.log(event);

    if (event.key == button.textContent) {
      button.classList.remove('active');
    }
    if ((event.key == 'Control' && button.textContent == 'Ctrl') || (event.key == 'Control' && button.textContent == 'Ctrl')
        || (event.key == 'Delete' && button.textContent == 'Del') || (event.key == 'Meta' && button.textContent == 'Win')
        || (event.key == 'ArrowUp' && button.textContent == '▲') || (event.key == 'ArrowLeft' && button.textContent == '◄')
        || (event.key == 'ArrowDown' && button.textContent == '▼') || (event.key == 'ArrowRight' && button.textContent == '►')) {
      button.classList.remove('active');
    }
  });
});

// document.addEventListener('keyup', function () {
//   buttons.forEach(button => {
//     button.classList.remove('active');
//   });
// });
