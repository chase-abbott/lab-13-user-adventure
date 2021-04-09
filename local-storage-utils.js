const USER = 'USER'

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
