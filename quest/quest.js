import { quests } from '../data.js';
import { updateUser } from '../local-storage-utils.js';
import { findById } from '../utils.js';


const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(quests, questId);

const title = document.createElement('h2');
title.textContent = quest.title;

const image = document.createElement('img');
image.src = quest.image;

const description = document.createElement('p');
description.textContent = quest.description;

const form = document.createElement('form');

section.append(title, image, description, form);

for (let questChoice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');


    input.type = 'radio';
    input.name = 'choices';
    input.value = questChoice.id;

    label.append(questChoice.description, input);

    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Submit';
form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const chosenOptionId = data.get('choices');

    const chosenOption = findById(quest.choices, chosenOptionId);

    form.textContent = chosenOption.result;

    updateUser(questId, chosenOption);

    function changeWindow() {
        window.location = '../map';
    }

    setTimeout(changeWindow, 3000);
});

