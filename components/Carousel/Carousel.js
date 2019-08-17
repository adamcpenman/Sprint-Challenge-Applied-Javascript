/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/



function carousel(){

  const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel');
  const leftBtn = document.createElement('div');
    leftBtn.classList.add('left-button');
  const rightBtn = document.createElement('div');
    rightBtn.classList.add('right-button');

  const images = [];
  for(let i = 0; i < 4; i++) {
    images.push(document.createElement('img'));
  }

  images[0].src = "./assets/carousel/mountains.jpeg";
  images[1].src = "./assets/carousel/computer.jpeg";
  images[2].src = "./assets/carousel/trees.jpeg";
  images[3].src = "./assets/carousel/turntable.jpeg";

  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(rightBtn);

const containerCarousel = document.querySelector('.carousel-container');

  containerCarousel.appendChild(carouselDiv);

  images.forEach(c => carouselDiv.appendChild(c));
  


 return carouselDiv; 

}

console.log(carousel());