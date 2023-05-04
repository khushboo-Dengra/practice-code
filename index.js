const getData = (x, a, y) => {
  a = a.split(' ').map(Number);

  console.log(a);

  let index = -1;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === y) {
      index = i;
      break;
    }
  }
  return index;
};

const result = getData(4, '4 5 7 8', 7);
console.log(result);
