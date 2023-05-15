let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qtyBox');

addBtn.addEventListener('click',()=>{
    qty.value = parseInt(qty.value)+1;
});
subBtn.addEventListener('click',()=>{
    /* qty.value = parseInt(qty.value)-1; */
    if(qty.value <= 0){
        qty.value = 0;
    }else{
        qty.value = parseInt(qty.value) - 1;
    }
});

let addBtn2 = document.querySelector('#add2');
let subBtn2 = document.querySelector('#sub2');
let qty2 = document.querySelector('#qtyBox2');

addBtn2.addEventListener('click',()=>{
    qty2.value = parseInt(qty2.value)+1;
});
subBtn2.addEventListener('click',()=>{
    if(qty2.value <= 0){
        qty2.value = 0;
    }else{
        qty2.value = parseInt(qty2.value) - 1;
    }
});

let addBtn3 = document.querySelector('#add3');
let subBtn3 = document.querySelector('#sub3');
let qty3 = document.querySelector('#qtyBox3');

addBtn3.addEventListener('click',()=>{
    qty3.value = parseInt(qty3.value)+1;
});
subBtn3.addEventListener('click',()=>{
    if(qty3.value <= 0){
        qty3.value = 0;
    }else{
        qty3.value = parseInt(qty3.value) - 1;
    }
});