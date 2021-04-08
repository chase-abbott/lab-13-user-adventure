import { setUser, getUser } from '../local-storage-utils.js';

const test = QUnit.test;

test('Test setUser function', (expect) => {
    const array = [1, 2, 3, 4];

    const stringyArray = JSON.stringify(array);

    localStorage.setItem('ARRAY', stringyArray);

    const expected = array;

    setUser(array);

    const actual = JSON.parse(localStorage.getItem('ARRAY'));

    expect.deepEqual(actual, expected);
});

test('Test getUser function', (expect) => {

    const array = [1, 2, 3, 4, 5];

    const stringyArray = JSON.stringify(array);

    localStorage.setItem('USER', stringyArray);

    const expected = array;

    const actual = getUser();

    expect.deepEqual(actual, expected);
});