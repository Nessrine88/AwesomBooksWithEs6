import {
  addBooks,
  contact,
  addBoo,
  contactHandler,
} from './modules/hideDisplay.js';

import { BookCollection } from './modules/bookCollection.js';

import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

addBooks.addEventListener('click', addBoo);
contact.addEventListener('click', contactHandler);

const bookCollection = new BookCollection();
bookCollection.addBook('', '');
const currentDateElement = document.getElementById('datetime');
const currentDateTime = DateTime.local();
currentDateElement.textContent = currentDateTime.toLocaleString(DateTime.DATE_FULL);
