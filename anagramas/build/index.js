let readline = require("readline-sync");
const word = readline.question("Digite uma palavra ");
let factorial = word.length;
let possibleAnagrams = factorial;
for (var i = 1; i < factorial; i++) {
    possibleAnagrams *= i;
}
let anagramsArray = [];
anagramsArray.push(word);
const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
};
while (anagramsArray.length < possibleAnagrams) {
    let wordArr = word.split("");
    shuffle(wordArr);
    const newWord = wordArr.join("");
    const includeAnagram = anagramsArray.some((data) => {
        return data === newWord;
    });
    if (!includeAnagram) {
        anagramsArray.push(newWord);
    }
}
console.table(anagramsArray);
//# sourceMappingURL=index.js.map