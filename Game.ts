/**
 * 
 * The Game class represents a stat line for a single player for a single game.
 * 
 * You should not need to change this file.
 * 
 */
export class Game {
    player: string = ""; // name of player
    opponent: string = "";
    court: string = "";
    outcome: string = ""; // "won" or "lost"
    minutes: number = 0;
    fgm: number = 0; // field goals made
    fga: number = 0; // field goals attempted
    tpm: number = 0; // three pointers made
    tpa: number = 0; // three pointers attempted
    ftm: number = 0; // *** free throws made ***
    fta: number = 0; // *** free throws attempted ***
    rebounds: number = 0;
    assists: number = 0;
    blocks: number = 0;
    steals: number = 0;
    fouls: number = 0;
    turnOvers: number = 0;
    points: number = 0;
}