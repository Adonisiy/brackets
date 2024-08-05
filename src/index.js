module.exports = function check(str, bracketsConfig) {
  console.log(str);
  console.log(bracketsConfig);
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const elemStr = bracketsConfig.find((s) => s.includes(str[i]));
    if (elemStr[0] == elemStr[1]) {
      if (arr.length && arr[arr.length - 1] == str[i]) {
        arr.pop();
        continue;
      }
      const elemArr = bracketsConfig.find((s) => s[0] == arr[arr.length - 1]);
      if (arr.length && !elemArr) return false;
      arr.push(str[i]);
    } else {
      if (elemStr[0] == str[i]) {
        arr.push(str[i]);
        continue;
      }
      const elemArr = bracketsConfig.find((s) =>
        s.includes(arr[arr.length - 1])
      );
      if (!arr.length || elemArr[1] != str[i]) return false;
      arr.pop();
    }
  }
  return arr.length == 0;
};
