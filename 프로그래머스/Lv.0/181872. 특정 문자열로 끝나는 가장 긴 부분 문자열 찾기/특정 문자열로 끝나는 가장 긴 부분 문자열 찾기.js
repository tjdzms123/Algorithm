function solution(myString, pat) {
  const answer = myString.lastIndexOf(pat);

  return myString.slice(0, answer + pat.length);
}
