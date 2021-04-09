import { setUser } from './local-storage-utils.js';
import { findById } from './utils.js';
import { userClassChoices } from './character-stats.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const userClass = data.get('user-class');
    const userName = data.get('name');
    const classChoice = findById(userClassChoices, userClass);

    const user = {
        hp: classChoice.hp,
        gold: classChoice.gold,
        name: userName,
        class: userClass,
        completed: {}
    };

    setUser(user);

    window.location = './map';
});