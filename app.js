const wrapper=document.querySelector('.sliderWrapper');

const menuItems=document.querySelectorAll('.menuItem');

menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        // console.log('clicked'+index);
        wrapper.style.transform=`translateX(-${index*100}vw)`
    });
});