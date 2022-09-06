//const checkPalindrom = 'ana'
//232;
//'Sator Arepo tenet opera rotas'
//'menem'
//'ata'

const palindrome = (checkPalindrom) => {
  let word = checkPalindrom + "";
  let first = 0;
  let last = word.length - 1;

  for (i = first; i < word.length; i++) {
    if (first > last) break;
    let firstChar = word[first].toLocaleLowerCase();
    let lastChar = word[last].toLocaleLowerCase();

    if (firstChar === lastChar) {
      first += 1;
      last -= 1;
      console.log(`Palindrom word : ${word}`);
    } else {
      console.log(`This word not palindrom : ${word}`);
    }
  }
};
palindrome('ana');
