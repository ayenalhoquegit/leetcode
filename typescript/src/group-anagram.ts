//const strs = [""];
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let angObj: any = {};
strs.forEach((s: string) => {
  let key = s.split("").sort().join("");
  if (angObj[key]) {
    angObj[key].push(s);
  } else {
    angObj[key] = [s];
  }
});
const res = Object.keys(angObj).map((key: string) => angObj[key]);
console.log(res);
