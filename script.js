const switchEl = document.querySelector('.switch');
const body = document.querySelector('body');
const textDiv = document.querySelector('.text');
const container = document.querySelector('.container');

switchEl.addEventListener('click', () => {
    switchEl.classList.toggle('switchPosition');
    body.classList.toggle('dark');
    container.classList.toggle('dark');
    textDiv.classList.toggle('darkText');


    if (body.classList == 'dark') {
        textDiv.textContent = 'Dark mode';
    } else {
        textDiv.textContent = 'Light mode';
    }


})