import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

// створення розмітки галереї
const galleryList = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`).join('');

// додавання розмітки на сторінку
gallery.insertAdjacentHTML('afterbegin', galleryList);



gallery.addEventListener('click', showImg);

// створення модального вікна
function showImg(evt) {
    if (evt.target.tagName !== 'IMG') {
        return;
    }
    evt.preventDefault();
    const instance = basicLightbox.create(`
    <div class="modal">
       <img class="modal__image" src="${evt.target.dataset.source}" alt="${evt.target.attributes.alt.textContent}" width="800" height="600"/>
    </div>
   `)
    instance.show();

    document.addEventListener('click', closeModal);

// закривання модального вікна за допомогою клавіши 'Escape' 
    document.addEventListener('keydown', closeModal);
   
        function closeModal(evt) {
       if (evt.code !== 'Escape' && evt.pointerType !== "touch") {
           return;
       } 
       instance.close();
   }
    

}








// console.log(galleryItems);
