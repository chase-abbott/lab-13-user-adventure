import { getUser } from './local-storage-utils.js';

export function renderHeader(user) {

    const header = document.createElement('header');
    const image = document.createElement('img');
    const h2Name = document.createElement('h2');
    const h2Class = document.createElement('h2');
    const h2Hp = document.createElement('h2');
    const h2Gold = document.createElement('h2');

    h2Name.textContent = `Name: ${user.name}`;
    h2Name.id = 'name';

    h2Class.textContent = `Class: ${user.class}`;
    h2Class.id = 'class';

    h2Hp.textContent = `Hp: ${user.hp}`;
    h2Hp.id = 'hp';

    h2Gold.textContent = `Gold: ${user.gold}`;
    h2Gold.id = 'gold';

    image.src = `../assets/${user.class}.png`;
    header.append(image, h2Name, h2Class, h2Hp, h2Gold);
    return header;
}

export function renderUpdatedHeader() {
    const user = getUser();
    const h1 = document.querySelector('#hp');
    const h2 = document.querySelector('#gold');

    h1.textContent = `Hp: ${user.hp}`;
    h2.textContent = `Gold: ${user.gold}`;

    return [h1, h2,];
}