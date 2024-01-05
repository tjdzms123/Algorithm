function solution(str_list) {
  const indexOfL = str_list.indexOf('l');
  const indexOfR = str_list.indexOf('r');

  if (indexOfL === -1 && indexOfR === -1) {
    return [];
  }

  if (indexOfL !== -1 && (indexOfR === -1 || indexOfL < indexOfR)) {
    return str_list.splice(0, indexOfL);
  } else if (indexOfR !== -1 && (indexOfL === -1 || indexOfR < indexOfL)) {
    return str_list.splice(indexOfR + 1);
  }
  return [];
}
