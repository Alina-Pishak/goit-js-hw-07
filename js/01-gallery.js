import { galleryItems } from './gallery-items.js';
// Change code below this line

//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   }


const gallery = document.querySelector('.gallery');


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

gallery.insertAdjacentHTML('afterbegin', galleryList);



gallery.addEventListener('click', showImg);

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
 
    document.addEventListener('keydown', closeModal);
   
    function closeModal(evt) {
       if (evt.code !== 'Escape') {
           return;
       } 
       instance.close();
   }
}








// console.log(galleryItems);
