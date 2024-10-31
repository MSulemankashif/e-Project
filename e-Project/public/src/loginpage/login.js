const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let passwordMessage = document.querySelector(".pass");  // Changed variable name
let first = document.querySelector('.first');
let second = document.querySelector(".second");

function checkPassword() {  // Changed function name
    if(second.value === first.value )  // Added .value to compare input values
    {   
        passwordMessage.style.display = "none";
    } else {
        passwordMessage.style.display="flex";
    } 
}

// Add event listeners to inputs
first.addEventListener('input', checkPassword);
second.addEventListener('input', checkPassword);