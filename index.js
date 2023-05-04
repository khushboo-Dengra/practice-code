const getData = (x, a, y) => {
  a = a.split(' ').map(Number);

  console.log(a);

  let index = -1;

  for (let i = 0; i < x; i++) {
    if (a[i] === y) {
      index = i;
      break;
    }
  }
  return index;
};

// const result=getData(4, '4 5 7 8', 3);
console.log(getData(4, '4 5 7 8', 7));
