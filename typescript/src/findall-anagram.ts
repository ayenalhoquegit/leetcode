let s = "cbaebabacd";
let p = "abc";
let p_length = p.length;
p = p.split("").sort().join("");
let result: any = [];
for (let i = 0; i <= s.length - p_length; i++) {
  let s_part = s.slice(i, i + p_length);
  s_part = s_part.split("").sort().join("");
  if (p == s_part) {
    result.push(i);
  }
}
const stats: any = {};
for (const char of p) {
  stats[char] = stats[char] || 0;
  stats[char]++;
}

console.log(stats);
