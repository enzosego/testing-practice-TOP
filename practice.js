const capitalize = string => {
  let firstLetter = string.slice(0, 1).toUpperCase();
  let newString = firstLetter.concat(string.slice(1));
  return newString;
}

const reverseString = string => 
  string.split('').reverse().join('');

const calculator = {
  sum: (a, b) => a + b,
  substract: (a, b) => a - b,
  division: (a, b) => a / b,
  multiply: (a, b) => a * b,
}

const analyze = array => {
  const newAverage = 
    array.reduce((acc, currValue) => acc + currValue, 0)
    / array.length;

  let newMin = Infinity;
  array.forEach(num => {
    if (num < newMin) newMin = num;
  })

  let newMax = -Infinity;
  array.forEach(num => {
    if (num > newMax) newMax = num;
  })
  return {
    average: newAverage,
    min: newMin,
    max: newMax,
    length: array.length
  }
}

const ALPHABET = [
'a', 'b', 'c', 'd', 'e', 'f', 
'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x', 
'y', 'z']

const cipherConverter = (string, shift) => {
  let convertedString = '';
  for (let i = 0; i < string.length; i++) {
    const index = ALPHABET.indexOf(string[i].toLowerCase());
    if (!ALPHABET.includes(string[i].toLowerCase())) 
      convertedString += string[i];
    else if (index+shift > ALPHABET.length - 1) {
      const wrapShift = (index+shift) - 26;
      string[i] === string[i].toUpperCase()
        ? convertedString += ALPHABET[wrapShift].toUpperCase()
        : convertedString += ALPHABET[wrapShift];
    } else if (index+shift < 0) {
      string[i] === string[i].toUpperCase()
        ? convertedString += ALPHABET[ALPHABET.length+(index+shift)].toUpperCase()
        : convertedString += ALPHABET[ALPHABET.length+(index+shift)];
    } else
      string[i] === string[i].toUpperCase()
        ? convertedString += ALPHABET[index+shift].toUpperCase()
        : convertedString += ALPHABET[index+shift];
  }
  return convertedString;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  analyze,
  cipherConverter
}
