function firstDuplicateNumber(array) {
  let obj = {
    seen: [],
    dup: [-1]
  };
  array.forEach(elem => {
    if (!obj.seen.includes(elem)) {
      obj.seen.push(elem);
      console.log(obj.seen);
    } else if (obj.seen.includes(elem)) {
      obj.dup.push(elem);
    }
  });
  if (obj.dup[1]) {
    return obj.dup[1];
  }
  return obj.dup[0];
}

console.log(firstDuplicateNumber([1, 2, 3]));
