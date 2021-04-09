
const section = document.querySelector('section');

const button = document.createElement('button');

button.textContent = 'Reset';

button.addEventListener('click', () => {
    localStorage.clear;
    window.location = '../';
})

section.append(button);
