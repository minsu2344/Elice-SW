window.onload = function () {
  var el = document.getElementById("change_heading");
  el.innerText = "카 레이싱 대회";

  //2. `<section>`내에 있는 색 팔레트에 마우스 커서를 갖다댈 때 `index.html`에 `<span class="selected">`태그에 None!을 해당하는 색깔로 대체하는 코드를 작성하세요.
  var section = document.querySelector("section");
  let selected = document.querySelector('.selected')

  var newDiv = document.createElement("div");
  newDiv.className = "purple";
  section.appendChild(newDiv);

  let colors = document.querySelectorAll('section div');
  Array.from(colors).forEach(color => {
    color.addEventListener('mouseenter', () => {
      selected.innerText = `${color.className}`;
    })
  })

  var button = document.querySelector("button");
  var car1 = document.querySelector(".car1");
  var car2 = document.querySelector(".car2");
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;

  function reset(car1, car2) {
    clearTimeout(car1.timer);
    clearTimeout(car2.timer);
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    button.disabled = false;
  }

  function car1Go() {
    car1.timer = setInterval(() => {
      car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
      if(parseInt(car1.style.marginLeft) > window.innerWidth) {
        alert(`car 1 승`);
        reset(car1, car2);
      }
    }, 60);
  }

  function car2Go() {
    car2.timer = setInterval(() => {
      car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
      if(parseInt(car2.style.marginLeft) > window.innerWidth) {
        alert(`car 2 승`);
        reset(car1, car2);
      }
    }, 60);
  }
  
  //3.`button.addEventListener()` 함수 내에 경주 시작 버튼을 클릭할 때 car1과 car 2를 좌에서 우로 움직이는 코드를 작성하세요.
  //4.car1이 오른쪽 사이드에 먼저 도착했을 경우 Car 1 승이라는 alert를 띄우세요. car2도 동일하게 alert 메시지를 띄우는 코드를 작성하세요.
  button.addEventListener("click", function (event) {
    this.disabled = true;
    car1Go();
    car2Go();
  });
};