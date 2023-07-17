export const list = document.getElementById('list');
export const addBooks = document.getElementById('addBooks');
export const contact = document.getElementById('contact');

export const section2 = document.getElementById('section2');
export const section3 = document.getElementById('section3');
export const section4 = document.getElementById('section4');
export const heading = document.getElementById('heading');

export const addBoo = (event) => {
  event.preventDefault();
  section2.style.display = 'none';
  section3.style.display = 'block';
  section4.style.display = 'none';
  heading.style.display = 'none';
};

export const contactHandler = (event) => {
  event.preventDefault();
  section2.style.display = 'none';
  section3.style.display = 'none';
  section4.style.display = 'block';
  heading.style.display = 'none';
};
