function solution(babbling) {
  const possibleWords = ['aya', 'ye', 'woo', 'ma'];

  const answer = babbling
    .map(str => {
      for (const word of possibleWords) {
        if (str.includes(word)) {
          str = str.replace(word, ' ');
        }
      }
      return str;
    })
    .filter(str => !str.trim()).length;

  return answer;
}