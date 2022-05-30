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

// ======================================
// Завдання 1 - бібліотека SimpleLightbox

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. 

// Розбий його на декілька підзавдань:
//    1. Додай бібліотеку SimpleLightbox як залежність проекту, 
// використовуючи npm(посилання на CDN з твоєї минулої роботи більше не потрібне).
//    2. Використовуй свій JavaScript код з попередньої домашньої роботи, 
// але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm(синтаксис import /export).

// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";