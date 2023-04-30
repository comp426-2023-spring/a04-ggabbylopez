export function rps(move){
    const gameRules = {
        rock: {
            rock: 'tie',
            scissors: 'lose',
            paper: 'win'
        },
        paper: {
            paper: 'tie',
            rock: 'lose',
            scissors: 'win'
        },
        scissors: {
            scissors: 'tie',
            paper: 'lose',
            rock: 'win'
        }
    }

    const moveIndex = Math.trunc(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    if (move == undefined){
        return {"player": choices[moveIndex]}
    }

    move = move.toLowerCase();

    if (!choices.includes(move)){
        throw new RangeError(`${move} is out of range`)
    }
    let result = gameRules[choices[moveIndex]][move];

    return {player: move, opponent: choices[moveIndex], result: result}
}

export function rpsls(move){
    const gameRules = {
        rock: {
            rock: 'tie',
            scissors: 'lose',
            lizard: 'lose',
            paper: 'win',
            spock: 'win'
        },
        paper: {
            paper: 'tie',
            rock: 'lose',
            spock: 'lose',
            scissors: 'win',
            lizard: 'win'
        },
        scissors: {
            scissors: 'tie',
            paper: 'lose',
            lizard: 'lose',
            rock: 'win',
            spock: 'win'
        },
        lizard: {
            paper: 'lose',
            rock: 'win',
            spock: 'lose',
            scissors: 'win',
            lizard: 'tie'
        },
        spock: {
            paper: 'win',
            rock: 'lose',
            spock: 'tie',
            scissors: 'lose',
            lizard: 'win'
        }
    }
    const moveIndex = Math.trunc(Math.random() * 5);
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    if (move == undefined){
        return {"player": choices[moveIndex]}
    }

    move = move.toLowerCase();

    if (!choices.includes(move)){
        throw new RangeError(`${move} is out of range`)
    }
    let result = gameRules[choices[moveIndex]][move];

    return {player: move, opponent: choices[moveIndex], result: result}
}