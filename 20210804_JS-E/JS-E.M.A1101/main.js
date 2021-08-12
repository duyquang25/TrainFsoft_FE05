const images = ['images/img1.jpg', 'images/img2.png', 'images/img3.png'];
let index = 0;
 
// Add your code here
// Task 1

imgContainer = document.querySelector(".img-container");
backBtn = document.querySelector(".back");
nextBtn = document.querySelector(".next");

backBtn.addEventListener('click', function() {
  // Add your code here
  // Task 3.1
  index--;
  if(index < 0 ){
    index = 0 ;
  }
  renderImage();

});

nextBtn.addEventListener('click', function() {
  // Add your code here
  // Task 3.2

  index++;
  if (index >= images.length) {
    index = 0;
  }
  renderImage();
});

// Add your code here
// Task 2



function renderImage(){
  imgContainer.innerHTML = `<img src="${images[index]}">`;
}

renderImage()
  
