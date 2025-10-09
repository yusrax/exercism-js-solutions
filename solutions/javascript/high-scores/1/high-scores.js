//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(_scores = []) {
    this._scores = _scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores.pop();
  }

  get personalBest() {
    return Math.max(...this._scores); 
  }

  get personalTopThree() {
    return [...this._scores].sort((a, b) => b - a).slice(0, 3);
  }
}
