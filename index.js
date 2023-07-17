/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */

// eslint-disable-next-line no-unused-vars

// Hidde and display sections
import {
  addBooks,
  contact,
  addBoo,
  contactHandler,
} from './modules/hideDisplay.js';

// class declaration

import { BookCollection } from './modules/bookCollection.js';

import { DateTime } from './luxon/build/es6/luxon.js';

addBooks.addEventListener('click', addBoo);
contact.addEventListener('click', contactHandler);
// eslint-disable-next-line no-unused-vars
const bookCollection = new BookCollection();
const currentDateElement = document.getElementById('datetime');
const currentDateTime = DateTime.local();
currentDateElement.textContent = currentDateTime.toLocaleString(DateTime.DATE_FULL);
