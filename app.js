/* eslint-disable no-param-reassign */
let i = 0;
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

const checkRead = function (btn) {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('read')) {
      btn.classList.remove('read');
      btn.classList.add('notRead');
      btn.textContent = 'Not Read';
    } else {
      btn.classList.add('read');
      btn.classList.remove('notRead');
      btn.textContent = 'Read';
    }
  });
};
const Delete = function (btn, index, arr) {
  btn.addEventListener('click', () => {
    arr.splice(index, 1);
    window[`bookCon${index}`].remove();
  });
};
function Book(name, author, pages, isReadobj) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isReadobj = isReadobj;
}
Book.prototype.create = function (arr) {
  window[`bookName${arr.length - 1}`] = document.createElement('p');
  window[`bookAuthor${arr.length - 1}`] = document.createElement('p');
  window[`bookPages${arr.length - 1}`] = document.createElement('p');

  window[`bookName${arr.length - 1}`].textContent = this.name;
  window[`bookAuthor${arr.length - 1}`].textContent = this.author;
  window[`bookPages${arr.length - 1}`].textContent = this.pages;
};
Book.prototype.isRead = function (arr) {
  window[`readBtn${arr.length - 1}`] = document.createElement('button');
  window[`readBtn${arr.length - 1}`].classList.add('readBtn');
  window[`readBtn${arr.length - 1}`].setAttribute('id', `btn${parseInt(arr.length - 1, 10)}`);
  if (this.isReadobj) {
    window[`readBtn${arr.length - 1}`].textContent = 'Read';
    window[`readBtn${arr.length - 1}`].classList.add('read');
  } else {
    window[`readBtn${arr.length - 1}`].textContent = 'Not Read';
    window[`readBtn${arr.length - 1}`].classList.add('notRead');
  }
  checkRead(window[`readBtn${arr.length - 1}`]);
};
const append = function (arr) {
  window[`bookCon${arr.length - 1}`] = document.createElement('div');
  window[`bookCon${arr.length - 1}`].classList.add('bookCon');
  window[`bookCon${arr.length - 1}`].append(window[`bookName${arr.length - 1}`]);
  window[`bookCon${arr.length - 1}`].append(window[`bookAuthor${arr.length - 1}`]);
  window[`bookCon${arr.length - 1}`].append(window[`bookPages${arr.length - 1}`]);
  window[`bookCon${arr.length - 1}`].append(window[`readBtn${arr.length - 1}`]);
  window[`bookCon${arr.length - 1}`].append(window[`remove${arr.length - 1}`]);
  library.appendChild(window[`bookCon${arr.length - 1}`]);
};
const remove = function (arr, obj) {
  window[`remove${arr.length - 1}`] = document.createElement('button');
  window[`remove${arr.length - 1}`].textContent = 'Remove';
  Delete(window[`remove${arr.length - 1}`], arr.indexOf(obj), arr);
};
const store = function (obj) {
  libraryArr.push(obj);
};
const reset = function () {
  nameInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  isReadInput.checked = false;
};
formBtn.addEventListener('click', (event) => {
  i++;
  event.preventDefault();
  if (nameInput.value && authorInput.value && pagesInput.value) {
    window[`libraryBook${i}`] = new Book(nameInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
    store(window[`libraryBook${i}`]);
    libraryArr[libraryArr.length - 1].create(libraryArr);
    libraryArr[libraryArr.length - 1].isRead(libraryArr);
    remove(libraryArr, window[`libraryBook${i}`]);
    append(libraryArr);
    reset();
    form.classList.add('none');
  } else {
    console.log('empty');
  }
});
