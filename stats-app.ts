/**
 * Author: Meris Beganovic 
 *
 * ONYEN: merisb
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */

import { print, csvToList } from "introcs";
import { List, first } from "introcs/list";
import { filter, map, reduce } from "./list-utils";
import { Game } from "./Game";

export let main = async () => {
    // Load players' game data
    let games = await csvToList("Select data/ps04-player-data.csv", Game);

    // TODO #2: Test your functions here
    print("1. Team Totals:");
    print("Made: " + ftMade(games));
    print("Attempted: " + ftAttempts(games));

    print("2. Percentages: ");
    print("Overall: " + ftPercent(games));
    print("of Wins: " + ftPercentInWins(games));
    print("of Losses: " + ftPercentInLosses(games));
    print("Joel Berry II: " + ftPercentOfBerry(games));

    print("3. Single Game Record: ");
    print("Most FTs made: " + ftMadeRecord(games));
    print("By Player(s): " + playersByFTMade(games, ftMadeRecord(games)));
};

// TODO: Define and export your analysis functions here...
export let ftMade = (g: List<Game>): number => {
    let ftms = map(g, (game: Game): number => game.ftm);
    let ftm = reduce(ftms, (a, b) => a + b, 0);
    return ftm;
};

export let ftAttempts = (g: List<Game>): number => {
    let ftas = map(g, (game: Game): number => game.fta);
    let fta = reduce(ftas, (a, b) => a + b, 0);
    return fta;
};

export let ftPercent = (g: List<Game>): number => {
    return (ftMade(g) / ftAttempts(g)) * 100;
};

export let ftPercentInWins = (g: List<Game>): number => {
    let filteredWins = filter(g, (game: Game): boolean => game.outcome === "won");
    let ftmws = map(filteredWins, (game: Game): number => game.ftm);
    let ftaws = map(filteredWins, (game: Game): number => game.fta);
    let ftmw = reduce(ftmws, (a, b) => a + b, 0);
    let ftaw = reduce(ftaws, (a, b) => a + b, 0);
    return (ftmw / ftaw) * 100;
};

export let ftPercentInLosses = (g: List<Game>): number => {
    let filteredWins = filter(g, (game: Game): boolean => game.outcome === "lost");
    let ftmls = map(filteredWins, (game: Game): number => game.ftm);
    let ftals = map(filteredWins, (game: Game): number => game.fta);
    let ftml = reduce(ftmls, (a, b) => a + b, 0);
    let ftal = reduce(ftals, (a, b) => a + b, 0);
    return (ftml / ftal) * 100;
};

export let ftPercentOfBerry = (g: List<Game>): number => {
    let filteredWins = filter(g, (game: Game): boolean => game.player === "Joel Berry II");
    let ftms = map(filteredWins, (game: Game): number => game.ftm);
    let ftas = map(filteredWins, (game: Game): number => game.fta);
    let ftm = reduce(ftms, (a, b) => a + b, 0);
    let fta = reduce(ftas, (a, b) => a + b, 0);
    return (ftm / fta) * 100;
};

export let ftMadeRecord = (g: List<Game>): number => {
    let ftm = map(g, (game: Game): number => game.ftm);
    return reduce(ftm, (a: number, b: number): number => {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    },            0);
};

export let playersByFTMade = (g: List<Game>, n: number): List<string> => {
    let filteredMaxFTMade = filter(g, (game: Game): boolean => game.ftm === n);
    let fmt = map(filteredMaxFTMade,  (game: Game): string => game.player);
    return fmt;
    
};
main();