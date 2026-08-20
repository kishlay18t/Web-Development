//Imports
import { home } from "./home/home.js";
import { login } from "./login/login.js";
import { catalogue } from "./catalogue/catalogue.js";
import { registration, handleRegistrationFormSubmission } from "./registration/registration.js";
import { cart } from "./cart/cart.js";

// Navigation Sections
const navSections = {
    home,
    login,
    registration,
    catalogue,
    cart
};

// DOM References
const navBar = document.getElementById("nav-bar");
const regForm = document.getElementById("registration-form");

// Event Listeners
navBar.addEventListener("click", handleNavClick);
regForm.addEventListener("submit", handleRegistrationFormSubmission);



// Business Logic
let prevNav = "home";
function handleNavClick(event){
    const navBtn = event.target;
    const currentNav = navBtn.classList[0].split("-")[0];

    console.log(currentNav);
    toggleNavPage(currentNav, prevNav);
    
    prevNav = currentNav;
}

function toggleNavPage(currentNav, prevNav){
    const toRemove = document.getElementById(`${prevNav}`);
    const toAdd = document.getElementById(`${currentNav}`);
    console.log(toAdd.classList);
    
    toRemove.classList.toggle('active');
    toAdd.classList.toggle('active');

    navSections[currentNav]();
}