import { setUser } from './local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const userClass = data.get('user-class');
    const userName = data.get('name');

    const user = {
        hp: 35,
        gold: 0,
        name: userName,
        class: userClass,
        completed: {}
    };

    setUser(user);

    window.location = './map';
});