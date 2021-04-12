import { quests } from '../data.js';
import { getUser, areQuestsCompleted } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';

// grab HTML elements
const main = document.querySelector('main');
const section = document.querySelector('section');

const user = getUser();

const header = renderHeader(user);

main.append(header, section);

// if all quests are completed or the user has less than or equal to 0 hp, redirect to results page
if (areQuestsCompleted() || user.hp <= 0) {
    window.location = '../results';
}

// for every quest in the quest array, create a corresponding link
for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;

    // the defines the link's URL
    anchorTag.href = `../quest/?id=${quest.id}`;
    anchorTag.id = quest.id;

    // positions the link based on the map attributes in the quest array
    anchorTag.style.left = quest.map.left;
    anchorTag.style.top = quest.map.top;
    section.append(anchorTag);
}

// checks to see if each quest is completed, if it is add a disabled class to the link
for (let quest of quests) {
    if (user.completed[quest.id]) {
        const link = document.querySelector(`#${quest.id}`);
        link.classList.add('disabled');
    }
}
