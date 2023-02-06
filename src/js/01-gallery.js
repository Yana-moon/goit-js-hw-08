// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgList = galleryItems
.map(
    ({ preview, original, description }) =>
    `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>`
)
.join('');

gallery.insertAdjacentHTML('beforeend', imgList);

new SimpleLightbox('.gallery a', {
captionsData: 'alt',

captionDelay: 250,
});
