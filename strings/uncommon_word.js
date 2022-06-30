// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]

function in_array(arr, wd, k) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === wd && i !== k) return true;
  }
  return false;
}

function removeDup(str1, str2) {
  const words = [...str1.split(' '), ...str2.split(' ')];
  const newWords = [];
  const len = words.length;
  for (let i = 0; i < len; i++) {
    if (!in_array(words, words[i], i)) {
      newWords.push(words[i]);
    }
  }
  return newWords;
}
let sentence1 = 'the tortoise beat the haire',
  sentence2 = 'the tortoise lost to the haire';

console.log(removeDup(sentence1, sentence2));
