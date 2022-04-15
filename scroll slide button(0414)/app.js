// 1) Scroll Navigation
var aTags = document.querySelectorAll('a');
for(var i = 0; i < aTags.length; i ++) {
    aTags[i].onclick = function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            'behavior': 'smooth',
            'top': target.offsetTop,
        });
    }
}


// 2) Image Slider
var slider = document.querySelector('#slider');
var slides = slider.querySelector('.slides');
var slide = slides.querySelectorAll('.slide');

var currentSlide = 0;

setInterval(() => {
  let from = -(1024*currentSlide);
  let to = from - 1024;
  slides.animate({
    marginLeft: [from + 'px', to + 'px'],
  }, {
    duration: 1,
    easing: 'ease',
    iterations: 1,
    fill: 'both',
  })
}, 3000);



// 3) Tabs
var links = document.querySelectorAll('.tabs-list li a')
var items = document.querySelectorAll('.tabs-list li')
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault();
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        var tabId = this.querySelector("a").getAttribute('href');
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active");
        this.classList.add("active");
    }  
}


// 4) Click Image Slider
document.querySelector('.right-arrow').onclick = function () {
  var currentSlide = document.querySelector('#photo .slide.active');
  var nextSlide = currentSlide.nextElementSibling;
  if (nextSlide === null) {
    nextSlide = currentSlide.parentElement.firstElementChild;
  }
  currentSlide.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 500,
      easing: 'ease',
      iterations: 1,
      fill: 'both',
    }
  );
  currentSlide.classList.remove('active');
  nextSlide.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: 500,
      easing: 'ease',
      iterations: 1,
      fill: 'both',
    }
  );
  nextSlide.classList.add('active');
};

//왼쪽 이미지 슬라이드 기능 구현
document.querySelector('.left-arrow').onclick = () => {
  let curSlide = document.querySelector('#photo .slide.active');
  let prevSlide = curSlide.previousElementSibling;
  console.log(prevSlide);

  if(prevSlide === null) {
    prevSlide = curSlide.parentElement.lastElementChild;
  }

  curSlide.classList.remove('active');
  prevSlide.classList.add('active');

  prevSlide.animate({
    opacity: [0, 1],
  },
  {
    easing: 'ease',
    duration: 500,
    fill: 'both',
    iterations: 1,  
  });
}