//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (letters) => {
  let newLetters = {};
  
  for (const point in letters) {
    for (let letter of letters[point]) {
      newLetters[letter.toLowerCase()] = Number(point);
    }
  }

  return newLetters;
};
