// import {readlineSync} from ('readline-sync')
let readline = require("readline-sync");

const word: string = readline.question("Digite uma palavra ");

let factorial: number = word.length;

let possibleAnagrams: number = factorial;
for (var i = 1; i < factorial; i++) {
  possibleAnagrams *= i;
}

let anagramsArray: string[] = [];
anagramsArray.push(word);

const shuffle = (array: string[]): string[] => {
  let currentIndex: number = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

while (anagramsArray.length < possibleAnagrams) {
  let wordArr: string[] = word.split("");
  shuffle(wordArr);
  const newWord: string = wordArr.join("");
  const includeAnagram: boolean = anagramsArray.some((data) => {
    return data === newWord;
  });
  if (!includeAnagram) {
    anagramsArray.push(newWord);
  }
}

console.table(anagramsArray);

// console.log(`${word} tem ${anagrams} anagramas possiveis`)
