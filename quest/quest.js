import { quests } from '../data.js';
import { findById } from '../utils.js';


const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(quests, questId);

const title = document.createElement('h2');
title.textContent = quest.title;

const image = document.createElement('img');
image.src = quest.image;

const form = document.createElement('form');

section.append(title, image, form);

for (let questChoice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');


    input.type = 'radio';
    input.name = 'choices';
    input.value = questChoice.id;

    label.append(questChoice.description, input);

    form.append(label)
}

const button = document.createElement('button');
button.textContent = 'Submit';

button.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData('choices');

})

form.append(button);
