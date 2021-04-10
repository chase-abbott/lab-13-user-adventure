
const castle = {
    id: 'castle',
    title: "The King's Castle",
    map: {
        top: '12%',
        left: '15%'
    },
    image: 'castle.png',
    description: 'You enter the front gates to a large town square',
    choices: [{
        id: 'king',
        description: 'You want a word with the king himself, approach him.',
        result: "The king gasps and says: 'I don't want anything to do with you! Throw him out!' Take 10 damage.",
        hp: -10,
        gold: 0
    }, {
        id: 'store',
        description: 'You decide to sell what you have found along the way',
        result: "It's a good day to sell some treasure! Gain 10 gold",
        hp: 0,
        gold: 10
    }, {
        id: 'bar',
        description: "You've had a long journey, head to the bar to get a drink",
        result: 'The town drunk challenges you to a fight for 15 gold. You win but at a cost of a black eye. Lose 20 health but gain 25 gold',
        hp: -20,
        gold: 25
    }]

};

const fountain = {
    id: 'fountain',
    title: 'The Fountain of Youth',
    map: {
        top: '65%',
        left: '23%'
    },
    image: 'pond.png',
    description: 'In a clearing you see a rocky outcropping surrounding a small pond that looks magical.',
    choices: [{
        id: 'jump',
        description: 'You think, screw it, and jump in',
        result: 'You feel an enormous energy wash over you, can 35 health!',
        hp: 35,
        gold: 0,
    }, {
        id: 'save',
        description: 'You take out your canteen and fill it up, you want to sell it',
        result: "There's some value to this stuff! Gain 15 gold",
        hp: 0,
        gold: 15
    }, {
        id: 'ignore',
        description: 'This is sketchy, ignore it and keep walking',
        result: 'Could have been a good call, but no way to be certain. Nothing Happens',
        hp: 0,
        gold: 0
    }]
};

const cave = {
    id: 'cave',
    title: 'Spooky Cave',
    map: {
        top: '10%',
        left: '72%'
    },
    image: 'cave.png',
    description: 'You approach an enormous opening in the side of a hill and assume it goes very deep',
    choices: [{
        id: 'run',
        description: "Don't want any of that mess, run away",
        result: 'An enormous sabertooth jumps at you and mauls you for 40 damage',
        hp: -45,
        gold: 0
    }, {
        id: 'bribe',
        description: 'Convince a passerby to join you',
        result: 'You enter to find a  sabertooth! You and your friend best it but lose 10hp and find a treasure chest not far from it. You spilt the treasure and gain 40 gold',
        hp: -10,
        gold: 40,
    }, {
        id: 'enter',
        description: 'Enter by yourself',
        result: 'You enter to find a  sabertooth! You best it but at a cost of 20hp and find a treasure chest not far from it. You gain 80 gold',
        hp: -20,
        gold: 80,
    }]
};

export const quests = [
    castle,
    fountain,
    cave,
];
