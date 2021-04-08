import { quests } from '../data.js';
import { getUser } from '../local-storage-utils.js';

const section = document.querySelector('section');

const user = getUser();

if (user.completed['castle'] === true && user.completed['fountain'] && user.completed['cave']) {
    window.location = '../results';
}

for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;
    anchorTag.href = `../quest/?id=${quest.id}`;

    section.append(anchorTag);
}

