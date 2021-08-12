// var theImages = [
//     {
//     src: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
//     width: "300",
//     height: "300",
//     },
//     {
//     src: "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
//     width: "300",
//     height: "300",
//     },
//     {
//     src: "https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs",
//     width: "300",
//     height: "300",
//     },
//     {
//     src: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
//     width: "300",
//     height: "300",
//     },
//     {
//     src: "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
//     width: "300",
//     height: "300",
//     },
//     {
//     src: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
//     width: "300",
//     height: "300",
//     },
// ]


var theImages = [
    {
    src: "img/img-0.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "img/img-1.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "img/img-2.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "img/img-3.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "img/img-4.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "img/img-5.jpg",
    width: "300",
    height: "300",
    },
]


const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")

const btn = document.querySelector(".btn")

// console.log(img1, img2, img3, btn);
var number1
var number2 
var number3


btn.addEventListener("click", myFunction) ; 

function myFunction(){

    number1 = Math.floor(Math.random() * theImages.length);  
    number2 = Math.floor(Math.random() * theImages.length);  
    number3 = Math.floor(Math.random() * theImages.length);  

    check = (number1 !== number2) && (number2 !== number3) && (number3 !== number1);


    console.log(number1, number2, number3)
    console.log(check);


    if(check){
        
        img1.src = theImages[number1].src;
        img1.width = theImages[number1].width;
        img1.height = theImages[number1].height;

        img2.src = theImages[number2].src;
        img2.width = theImages[number2].width;
        img2.height = theImages[number2].height;

        img3.src = theImages[number3].src;
        img3.width = theImages[number3].width;
        img3.height = theImages[number3].height;
       
    } else { 
        myFunction();
    }
    
}


