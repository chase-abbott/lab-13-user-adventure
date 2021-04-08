const USER = 'USER'

export function setUser(user) {
    const stringyArray = JSON.stringify(user);

    localStorage.setItem(USER, stringyArray);
}

export function getUser() {
    const stringyArray = localStorage.getItem('USER');

    const parsedArray = JSON.parse(stringyArray);

    return parsedArray;
}

export function updateUser() {

}
