// define some variable
const slider_container = document.querySelector(".carousel-slide") 
const images = document.querySelectorAll(".carousel-slide img")
// declare model variable
const ins_images = document.querySelectorAll('.grid-layout-instagram .instagram-item');
const modal_img = document.querySelector(".detail-cake-image"); 
const modal_tag = document.querySelector(".cake-info-tags p");
const modal =  document.querySelector(".detail-cake-modal");
const modal_close_button = document.querySelector(".detail-cake-modal .fa-times");
const modal_left_button = document.querySelector(".detail-cake-modal .fa-chevron-left");
const modal_right_button = document.querySelector(".detail-cake-modal .fa-chevron-right");


var load_more_button = document.querySelector(".button.load-button");
var modal_image_counter  = 0;
var counter=0;



function main(){
    initial()
    
}

function initial(){
    setUpSlider()
    setUpModal()
    setUpInstagramImageClick();
    setUpLoadButton()
}

function setUpLoadButton(){
    console.log(load_more_button)
    load_more_button.addEventListener('click',()=>{
        ins_images.forEach((item)=>{
            item.classList.remove('hide')
        })
        load_more_button.classList.add('hide')
    })
}

function setUpModal(){
    modal_close_button.addEventListener('click',() =>{
        modal.classList.add('hide');
    })
    modal_left_button.addEventListener('click',()=>{
        
        showInstgramModal(--modal_image_counter);
    })
    modal_right_button.addEventListener('click',()=>{
        
        showInstgramModal(++modal_image_counter);
        
    })

    
}

function setUpSlider(){
    const image_width = slider_container.firstElementChild.clientWidth;
    const num_image = images.length;
    
    setInterval(function (){
        counter++;
        slider_container.style.transition = 'transform ease 0.4s';
        slider_container.style.transform  = 'translateX('+(-image_width*counter) + 'px)';
        if (counter == num_image/2+1 ) {
            slider_container.style.transition = 'none';
            counter = 0;
            slider_container.style.transform  = 'translateX('+(-image_width*counter) + 'px)';
        } 
    },3000)
    // 
}

function setUpInstagramImageClick(){
    
    ins_images.forEach((img,index)=>{
        img.addEventListener("click", ()=>{
            showInstgramModal(index);
            modal_image_counter = index;
        });
    })
}
function showInstgramModal(index){
    let img = ins_images[index];
    let style = img.currentStyle || window.getComputedStyle(img, false);
    let bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    modal_img.firstElementChild.src = bi;
    if (modal.classList.contains('hide')) modal.classList.remove('hide');
    checkBoundSlideModal()

}
function checkBoundSlideModal(){
    modal_left_button.classList.remove('hide');
    modal_right_button.classList.remove('hide');
    console.log(modal_left_button.classList)
    if (modal_image_counter == 0) modal_left_button.classList.add('hide');
    if (modal_image_counter == ins_images.length-1) modal_right_button.classList.add('hide');
}





main()