console.log("Warsztat - Walidacja formularza zapisu do Newslatter'a");

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('agree-3');

const validate = (event) => {

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let agree1Chx = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (name.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imie i nazwisko!';
        errors.appendChild(liError)
    }

    if (email.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail!';
        errors.appendChild(liError)
    }

    if (!email.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Brak @ w adresie e-mail!';
        errors.appendChild(liError)
    }

    if (agree1Chx.checked === false) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyrażasz wymaganej zgody!';
        errors.appendChild(liError)
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
    

}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);
