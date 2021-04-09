
export function renderHeader(user) {

    const header = document.createElement('header');
    const image = document.createElement('img');

    header.textContent = `Name: ${user.name}    Class: ${user.class} hp: ${user.hp} Gold: ${user.gold}`;
    image.src = `../assets/${user.class}.png`;
    header.append(image);
    return header;
}