
export function renderHeader(user) {

    const header = document.createElement('header');
    const image = document.createElement('img');
    const h2 = document.createElement('h2');

    h2.textContent = `Name: ${user.name}  Class: ${user.class} hp: ${user.hp} Gold: ${user.gold}`;
    image.src = `../assets/${user.class}.png`;
    header.append(image, h2);
    return header;
}