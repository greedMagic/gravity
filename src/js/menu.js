const RETURN = 13;
const ESC = 27;
const SPACE = 32;

const TOGGLE = 'is-active';
const MENU = document.querySelector('.js-menu');
let isMenuOpen = false;
const openButton = document.querySelector('.js-open');
const closeButton = document.querySelector('.js-close');

function toggleMenu (event) {
  event.preventDefault();

  if (isMenuOpen === false) {
    document.body.classList.add('overflow-hidden');
    MENU.classList.add(TOGGLE);
    isMenuOpen = true;
  } else {
    document.body.classList.remove('overflow-hidden');
    MENU.classList.remove(TOGGLE);
    isMenuOpen = false;
  }
}

openButton.addEventListener('click', toggleMenu);

openButton.addEventListener('keydown', function(event) {
  if (event.keyCode === RETURN || event.keyCode === SPACE) toggleMenu(event);
});

closeButton.addEventListener('click', toggleMenu);

closeButton.addEventListener('keydown', function(event) {
  if (event.keyCode === RETURN || event.keyCode === SPACE) toggleMenu(event);
});

document.body.addEventListener('keydown', function(event) {
  if (event.keyCode === ESC && isMenuOpen === true) toggleMenu(event);
});

// const mainMenu = function (domNode) {

//   this.isOpen = false;

//   this.keyCode = Object.freeze({
//     'RETURN': 13,
//     'ESC': 27,
//     'SPACE': 32
//   });
// };
