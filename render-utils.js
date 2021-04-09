
export function renderHeader(user) {

    const header = document.createElement('header');

    header.textContent = `Name: ${user.name} Class: ${user.class} hp: ${user.hp} Gold: ${user.gold}`;

    return header;
}