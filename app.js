const wrapper=document.querySelector('.sliderWrapper');

const menuItems=document.querySelectorAll('.menuItem');

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 35000,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
        
      id: 2,
      title: "Air Jordan",
      price: 30000,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
            code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 35000,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 45000,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 25000,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];


let choosenProduct=products[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        //current slide
        wrapper.style.transform=`translateX(-${index*100}vw)`

       //product choosed
       choosenProduct=products[index];
        
       //update product

       currentProductTitle.textContent=choosenProduct.title;
       currentProductPrice.textContent=choosenProduct.price;
       currentProductImg.src=choosenProduct.colors[0].img;
        //new colors to choose
        currentProductColors.forEach((color,index)=>{
          color.style.backgroundColor=choosenProduct.colors[index].code;
      }  );

 
    });
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src=choosenProduct.colors[index].img;
    });
});
currentProductSizes.forEach((size)=>{
    size.addEventListener('click',()=>{
      currentProductSizes.forEach((size)=>{
        size.style.backgroundColor="white";
        size.style.color="black"; 
      });            
      size.style.backgroundColor="black";
      size.style.color="white";
     
    });
});

const powerButton=document.querySelector(".productButton");
const payButton=document.querySelector('.payment');
const close=document.querySelector('.close');

powerButton.addEventListener('click',()=>{
  payButton.style.display="flex";
});

close.addEventListener('click',()=>{
  payButton.style.display="none"
});