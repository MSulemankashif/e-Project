const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let passwordMessage = document.querySelector(".pass");  
let first = document.querySelector('.first');
let second = document.querySelector(".second");
let btn =  document.querySelector('.button');
let min = document.querySelector("#min");

let combine = first + second;

btn.addEventListener('click',()=>{
    if(combine.length<16)
    {
        min.style.display="flex";
    } else{
        min.style.display="none";
    }
})

btn.addEventListener('click',()=>{
    if(second.value === first.value )  
    {   
        passwordMessage.style.display = "none";
    } else {
        passwordMessage.style.display="flex";
        btn.type="button";
    } 
})

