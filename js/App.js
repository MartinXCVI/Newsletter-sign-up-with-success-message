const myFormu = document.getElementById('myFormu');
const newsletterSection = document.getElementById('myContainer');
const submitMailBtn = document.getElementById('submit-btn');
const successSection = document.getElementById('success-section');
const dismissBtn = document.getElementById('dismiss-btn');

const emailInput = document.getElementById('mail');

myFormu.addEventListener('submit', (e) => {

    e.preventDefault();
    const email = emailInput.value;
    const emailPlace = document.getElementById('emailPlace');
    emailPlace.textContent = email;

    if(validateEmail(email, true)) {
    const encodedEmail = encodeURIComponent(email);
    
    newsletterSection.classList.toggle('showMe');
    newsletterSection.classList.toggle('hideMe');
    successSection.classList.toggle('hideMe');
    successSection.classList.toggle('showMe');

    }  else {

        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = "Valid email required!";
        emailInput.style.border = "1px solid var(--darkTomato)";
        emailInput.style.color = "var(--darkTomato)";
        emailInput.style.backgroundColor = "hsla(4, 85%, 79%, 0.644)";

    }

    
});

function validateEmail(email) {

    const regex = /^\S+@\S+\.\S+$/; 
    return regex.test(email);

  }

dismissBtn.addEventListener('click', () => {
    
    successSection.classList.toggle('hideMe');
    successSection.classList.toggle('showMe');
    newsletterSection.classList.toggle('showMe');
    newsletterSection.classList.toggle('hideMe');

});