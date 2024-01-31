function solution(order) {
  const priceArr = order.map(e => {
    if (e.includes('americano')) {
      return 4500;
    } else if (e.includes('cafelatte')) {
      return 5000;
    } else {
      return 4500;
    }
  });

  const sum = priceArr.reduce((a, b) => a + b, 0);

  return sum;
}