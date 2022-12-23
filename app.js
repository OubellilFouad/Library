/* eslint-disable no-param-reassign */
const i = 0;
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
const container = document.querySelector('#container');
const add = container.querySelector('.add');
const library = container.querySelector('.library');
const libraryArr = [];
const form = container.querySelector('#addForm');
const formContent = form.querySelector('.formCon');
const formBtn = form.querySelector('.formBtn');
const nameInput = form.querySelector('#name');
const authorInput = form.querySelector('#author');
const pagesInput = form.querySelector('#pages');
const isReadInput = form.querySelector('#read');

document.addEventListener('click', (event) => {
  const formsideClick = !formContent.contains(event.target);
  const addClick = add.contains(event.target);
  if (addClick) {
    form.classList.remove('none');
  } else if (formsideClick) {
    form.classList.add('none');
  }
});
