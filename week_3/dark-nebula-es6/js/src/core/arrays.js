removeWithoutCopy = (arr, item) => {
  arr.splice(1, item)
  arr.splice(-2, item)
  return arr
};

append = (arr, item) => {
  arr.push(item)
  return arr
};

truncate = (arr) => {
  arr.pop()
  return arr
};

prepend = (arr, item) => {
  arr.unshift(item)
  return arr
};

curtail = (arr) => {
  arr.shift()
  return arr
};

concat = (arr1, arr2) => {
  return arr1.concat(arr2)
};

insert = (arr, item, index) => {
  arr.splice(index, 0, item)
  return arr
}

count = (arr, item) => {
  let count = 0
  arr.forEach(num => {
    if (num === item)
    count += 1
  })
  return count
};

duplicates = (arr) => {
  let sorted = arr.sort()
  let results = []
  sorted.forEach((num, index) => {
    if (sorted[index + 1] == sorted[index] && sorted[index] != sorted[index - 1]) {
      return results.push(sorted[index])
    }
  })
  return results
};

square = (arr) => {
  return arr.map((num) => {
    return Math.pow(num, 2)
  })
};

findAllOccurrences = (arr, item) => {
  let count = []
  arr.forEach((letter, index) => {
    if (item === letter) {
      count.push(index)
    }
  })
  return count
};
