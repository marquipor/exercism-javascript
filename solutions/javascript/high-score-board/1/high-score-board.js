/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  let SCORE_BOARD = {
    "The Best Ever" : 1000000
  };

  return SCORE_BOARD;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
  /*

  Aprendizaje importante: DIFERENCIA NOTACIÓN DE PUNTO Y []

  Si escribo scoreBoard.player, JavaScript crearía una propiedad llamada player   (no con el valor de la variable).

  Los corchetes SÍ miranque hay dentro de la variable.
  */
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {

  if(scoreBoard[player]){
      delete scoreBoard[player];
  }

  return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {

  if(scoreBoard.hasOwnProperty(player)){
    scoreBoard[player]+=points;
  }
     
  return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {

  for(let player in scoreBoard){
    scoreBoard[player]+=100;
  }

  return scoreBoard;
}
