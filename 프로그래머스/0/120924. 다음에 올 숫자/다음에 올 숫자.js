const solution = (common) => {
  let answer;
  if (
    common[1] - common[0] ===
    common[common.length - 1] - common[common.length - 2]
  ) {
    answer = common[0] + common.length * (common[1] - common[0]);
    return answer;
  } else if (
    common[1] / common[0] ===
    common[common.length - 1] / common[common.length - 2]
  ) {
    answer = common[0] * (common[1] / common[0]) ** common.length;
    return answer;
  }
};
