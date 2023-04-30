import res from "express/lib/response";

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