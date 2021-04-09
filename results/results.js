import { getUser } from '../local-storage-utils.js';
import { aliveGoldMessages, deadGoldMessages, hpMessages } from '../messages.js';

const section = document.querySelector('section');
const button = document.createElement('button');
const text = document.createElement('p');
const user = getUser();

let goldStatus;
let hpStatus;

if (user.gold >= 100) {
    goldStatus = 'superRich';
} else if (user.gold > 55 && user.gold < 100) {
    goldStatus = 'rich';
} else if (user.gold < 55 && user.gold > 15) {
    goldStatus = 'neitherRichNorPoor';
} else {
    goldStatus = 'poor';
}

if (user.hp >= 45) {
    hpStatus = 'strong';
} else if (user.hp > 15 && user.hp < 45) {
    hpStatus = 'weak';
} else {
    hpStatus = 'dead';
}

let whichGoldMessage;

if (hpStatus != 'dead') {
    whichGoldMessage = aliveGoldMessages;
} else {
    whichGoldMessage = deadGoldMessages;
}

text.textContent = `${hpMessages[hpStatus]} ${whichGoldMessage[goldStatus]}`


button.textContent = 'Reset';

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});

section.append(text, button);
