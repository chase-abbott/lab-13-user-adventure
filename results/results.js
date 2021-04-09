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

let goldStatus;
let hpStatus;

if (user.gold >= 100) {
    goldStatus = 'superRich';
} else if (user.gold >= 55 && user.gold < 100) {
    goldStatus = 'rich';
} else if (user.gold < 55 && user.gold > 15) {
    goldStatus = 'neitherRichNorPoor';
} else {
    goldStatus = 'poor';
}

if (user.hp >= 35) {
    hpStatus = 'strong';
} else if (user.hp > 1 && user.hp < 35) {
    hpStatus = 'weak';
} else {
    hpStatus = 'dead';
}

let whichGoldMessage;

if (hpStatus !== 'dead') {
    whichGoldMessage = aliveGoldMessages;
} else {
    whichGoldMessage = deadGoldMessages;
}

text.textContent = `${hpMessages[hpStatus]} ${whichGoldMessage[goldStatus]}`;


button.textContent = 'Reset';

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});

section.append(text, button);
