const g = [10, 9, 8, 7];
const s = [5, 6, 7, 8];
g.sort((a: number, b: number) => a - b);
s.sort((a: number, b: number) => a - b);
console.log(g);
console.log(s);

let assignNum = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] >= g[assignNum]) assignNum++;
  if (assignNum === g.length) break;
}
console.log(assignNum);

export {};
