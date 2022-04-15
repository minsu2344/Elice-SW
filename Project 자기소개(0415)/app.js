const boxes = document.getElementsByClassName('box');
const bigBoxes = document.getElementsByClassName('big');
const button = document.getElementById('all');

const HIDDEN_CLASS = 'hidden'

function handleBoxClick(e) {
  let id = e.target.id;
  if(!id) {
    id = e.target.parentElement.id;
  }
  Array.from(bigBoxes).forEach(bigBox => {
    if(bigBox.className.includes(id)) {
      bigBox.classList.remove(HIDDEN_CLASS);
      window.scrollTo({
        behavior: 'smooth',
        top: bigBox.offsetTop,
      })
    }
    else {
      bigBox.classList.add(HIDDEN_CLASS);
    }
    
  });

}

function handleBtnClick() {
  if(button.value === '▼ 펼치기') {
    button.value = '▲ 접기';
    Array.from(bigBoxes).forEach(bigBox => {
      bigBox.classList.remove(HIDDEN_CLASS);
    });
    window.scrollTo({
      behavior: 'smooth',
      top: bigBoxes[0].offsetTop,
    });
  }
  else {
    button.value = '▼ 펼치기';
    Array.from(bigBoxes).forEach(bigBox => {
      bigBox.classList.add(HIDDEN_CLASS);
    });
  }
}

Array.from(boxes).forEach(box => {
  box.addEventListener('click', handleBoxClick);
});

button.addEventListener('click', handleBtnClick);