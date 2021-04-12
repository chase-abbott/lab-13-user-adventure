import { quests } from './data.js';

const USER = 'USER';

// intakes an array or object and puts in local storage under the key 'USER'
export function setUser(array) {
    const stringyArray = JSON.stringify(array);

    localStorage.setItem(USER, stringyArray);
}

// grabs key 'USER' from local storage and parses the corresponding array
export function getUser() {
    const stringyArray = localStorage.getItem(USER);

    if (!stringyArray) return {};

    const parsedArray = JSON.parse(stringyArray);

    return parsedArray;
}

// intakes a questId and choice and re-sets local storage with the updated data
export function updateUser(questId, choice) {
    const user = getUser();

    user.gold = choice.gold + user.gold;

    user.hp = user.hp + choice.hp;

    user.completed[questId] = true;

    setUser(user);
}

// determines if all quests available are completed
export function areQuestsCompleted() {
    const user = getUser();

    for (let quest of quests) {
        // if user does not have quest completed in local storage, quests are not completed
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}
