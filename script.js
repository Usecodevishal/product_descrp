console.log('====================================');
console.log("Connected");
console.log('====================================');

const imgs = document.querySelectorAll('.angle-img');
const imgBtns = [...imgs];
let imgId = 1;
let turboImg = document.querySelector(".turbo-image");
let proCount = document.querySelector(".item-count");

document.querySelector(".cart-btn").addEventListener("click", function(){
    document.querySelector(".cart-notify").style.display = "block";
})

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        turboImg.src = imgItem.src;
        
    })
})

function inc(){
    console.log(proCount.innerText);
let count = Number(proCount.innerText);
++count;
proCount.textContent = count;
}

function dec(){
    let count = Number(proCount.innerText);
    if(count > 1){
        --count;
    }
    proCount.textContent = count;
}






