import { quests } from './data.js';

const USER = 'USER';

export function setUser(user) {
    const stringyArray = JSON.stringify(user);

    localStorage.setItem(USER, stringyArray);
}

export function getUser() {
    const stringyArray = localStorage.getItem(USER);

    if (!stringyArray) return {};

    const parsedArray = JSON.parse(stringyArray);

    return parsedArray;
}

export function updateUser(questId, choice) {
    const user = getUser();

    user.gold = choice.gold + user.gold;

    user.hp = user.hp + choice.hp;

    user.completed[questId] = true;

    setUser(user);
}

export function areQuestsCompleted() {
    const user = getUser();

    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}
