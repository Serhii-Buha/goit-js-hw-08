// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const galleryEl = document.querySelector('.gallery');

const imageEl = galleryItems.map(galleryItem => {
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = galleryItem.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = galleryItem.preview;
  image.alt = galleryItem.description;

  link.appendChild(image);

  return link;
});

galleryEl.append(...imageEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

//v2

// const galleryEl = document.querySelector('.gallery');
// galleryEl.insertAdjacentHTML(
//   'beforeend',
//   galleryItems
//     .map(
//       galleryItem =>
//         `<a href="${galleryItem.original}" class="gallery__link">
//     <img src="${galleryItem.preview}" alt="${galleryItem.description}" class="gallery__image">
//   </a>`
//     )
//     .join('')
// );

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionsData: 'alt',
// });


//v3

// const galleryEl = document.querySelector('.gallery');
// const imageEl = galleryItems
//   .map(
//     galleryItem => `
//   <a class="gallery__link" href="${galleryItem.original}">
//     <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}">
//   </a>
// `
//   )
//   .join('');

// galleryEl.innerHTML = imageEl;

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionsData: 'alt',
// });
