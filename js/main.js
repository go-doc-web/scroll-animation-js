import { refs } from './refs.js';

import { fetchPhotos } from './api.js';
import { getItemTemplate } from './photosTemplate.js';

const { list, boxes } = refs;

fetchPhotos()
  .then(photos => {
    getItemTemplate(photos, list);
    const boxes = document.querySelectorAll('.box');

    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      console.log(triggerBottom);

      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(triggerBottom);
        console.log(boxTop);

        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    };
    window.addEventListener('scroll', checkBoxes);
  })
  .catch(error => console.log(error));
