import { setUser, getUser, updateUser } from '../local-storage-utils.js';

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

test('Test updateUser function', (expect) => {

    const user = {
        name: 'Chase',
        gold: 20,
        hp: 20,
        completed: {},
        class: 'warrior'
    };

    localStorage.setItem('USER', JSON.stringify(user));

    const choice = {
        hp: 100,
        gold: -20
    };

    const expected = {
        name: 'Chase',
        gold: 0,
        hp: 120,
        completed: {
            cave: true
        },
        class: 'warrior'
    };

    updateUser('cave', choice);

    const actual = JSON.parse(localStorage.getItem('USER'));
    expect.deepEqual(actual, expected);
});

