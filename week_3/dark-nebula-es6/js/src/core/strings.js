reduceString = (str, amount) => {
  let newStr = ''
  str.split('').forEach(char => {
    if (newStr.split('').slice(-1 - amount).filter(el => char ===el).length < amount) {
      newStr += char
    }
  })
  return newStr
};

reverseString = (str) => {
  return str.split("").reverse().join("");
};
