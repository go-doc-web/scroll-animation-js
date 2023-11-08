const refs = {
  boxes: document.querySelectorAll('.box'),
};

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  //   console.log(triggerBottom);

  refs.boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    // console.log(triggerBottom);
    console.log(boxTop);

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
};
window.addEventListener('scroll', checkBoxes);
