import { findById, findResults } from '../utils.js';



const test = QUnit.test;

test('Test findById function', (expect) => {
    const array = [{
        id: 1,
        description: 'dumb'
    }, {
        id: 2,
        description: 'smart'
    }
    ];

    const expected = {
        id: 1,
        description: 'dumb'
    };

    const actual = findById(array, 1);

    expect.deepEqual(actual, expected);
});

test('Test findResults function', (expect) => {

    const expected = ['stronger than ever', 'you and your family buy the best house in town.'];


    const actual = findResults(35, 35);


    expect.deepEqual(actual, expected);
});
