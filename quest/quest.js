import { quests } from '../data.js';
import { updateUser, getUser } from '../local-storage-utils.js';
import { findById } from '../utils.js';
import { renderHeader, renderUpdatedHeader } from '../render-utils.js';

const main = document.querySelector('main');
const section = document.querySelector('section');

const user = getUser();

// grabs data from search bar
const params = new URLSearchParams(window.location.search);

// questId is now the value of the 'id' key in the search bar
const questId = params.get('id');
const quest = findById(quests, questId);

const header = renderHeader(user);
main.append(header, section);

const title = document.createElement('h2');
title.textContent = quest.title;

const image = document.createElement('img');
image.src = `../assets/${quest.image}`;

const description = document.createElement('p');
description.textContent = quest.description;

const form = document.createElement('form');

section.append(title, image, description, form);

// for every choice within the current quest's choices array...
for (let questChoice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');

    // set the attributes of the input
    input.type = 'radio';
    input.name = 'choices';
    input.value = questChoice.id;

    // pin the description of the choice to an input
    label.append(questChoice.description, input);

    // pin the label to the form
    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Submit';
form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    // get the data from the input(s) with the name 'choices' which were definied in the for loop above
    const chosenOptionId = data.get('choices');

    // use the data from the form to grab the corresponding choice from the choice object within the quest object
    const chosenOption = findById(quest.choices, chosenOptionId);

    form.classList.add('hidden');

    // creates a new paragraph element to display the result of the choice
    const newP = document.createElement('p');
    newP.textContent = chosenOption.result;

    const newLink = document.createElement('a');
    newLink.href = '../map';
    newLink.textContent = 'Back to Map';

    section.append(newP, newLink);

    // updates the User data in local storage depending on the quest and the option chosen
    updateUser(questId, chosenOption);
    renderUpdatedHeader();

});

