import { quests } from '../data.js';
import { getUser, areQuestsCompleted } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';

const body = document.querySelector('body')
const section = document.querySelector('section');

const user = getUser();

const header = renderHeader(user);

body.append(header, section);

if (areQuestsCompleted() || user.hp < 0) {
    window.location = '../results';
}

for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;
    anchorTag.href = `../quest/?id=${quest.id}`;

    section.append(anchorTag);
}

