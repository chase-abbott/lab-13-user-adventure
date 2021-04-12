import { setUser } from './local-storage-utils.js';
import { findById } from './utils.js';
import { userClassChoices } from './character-stats.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //gives us access to the value of inputs from the form
    const data = new FormData(form);

    //grabs the value from the input(s) with the name 'user-class'
    const userClass = data.get('user-class');
    const userName = data.get('name');

    // finds the class object that matches the class the user selected
    const classChoice = findById(userClassChoices, userClass);

    const user = {
        // sets user hp equal to the chosen class' hp
        hp: classChoice.hp,
        gold: classChoice.gold,
        name: userName,
        class: userClass,
        completed: {}
    };

    // sets user data into local storage
    setUser(user);

    // redirects user to map page
    window.location = './map';
});
