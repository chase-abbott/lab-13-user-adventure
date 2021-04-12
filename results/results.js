import { getUser } from '../local-storage-utils.js';
import { aliveGoldMessages, deadGoldMessages, hpMessages } from '../messages.js';
import { renderHeader } from '../render-utils.js';

const body = document.querySelector('body');
const main = document.querySelector('main');
const section = document.querySelector('section');
const button = document.createElement('button');
const text = document.createElement('p');
const user = getUser();
const header = renderHeader(user);

body.append(header, main);
main.append(section);

// creates variables without values, valid b/c let allows this
let goldStatus;
let hpStatus;

// sets the status of goldStatus based on the user's gold
if (user.gold >= 100) {
    goldStatus = 'superRich';
} else if (user.gold >= 55 && user.gold < 100) {
    goldStatus = 'rich';
} else if (user.gold < 55 && user.gold > 15) {
    goldStatus = 'neitherRichNorPoor';
} else {
    goldStatus = 'poor';
}

// sets the value of hpStatus depending on user's hp
if (user.hp >= 25) {
    hpStatus = 'strong';
} else if (user.hp > 1 && user.hp < 25) {
    hpStatus = 'weak';
} else {
    hpStatus = 'dead';
}

let whichGoldMessage;

// determines which messages to display depending on if the user is dead or not
if (hpStatus !== 'dead') {
    whichGoldMessage = aliveGoldMessages;
} else {
    whichGoldMessage = deadGoldMessages;
}

// uses bracket notation because we are not sure what the status' will be. status' match message keys
text.textContent = `${hpMessages[hpStatus]} ${whichGoldMessage[goldStatus]}`;


button.textContent = 'Reset';

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});

section.append(text, button);
