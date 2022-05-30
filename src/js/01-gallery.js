// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function addGalleryItemsImages(obj) {
    const gallery = obj.map(createGalleryElement).join('');
    galleryRef.innerHTML = gallery;
}

addGalleryItemsImages(galleryItems);

function createGalleryElement({preview, original, description}) {
    return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a>`
};

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 20, });