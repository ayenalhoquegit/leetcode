const string1 = "anagram";
const string2 = "nagaram";

function isAnagram(s1: string, s2: string): boolean {
  if (s1.length != s2.length) {
    return false;
  }
  // sort string
  let sortS1 = s1.split("").sort().join("");
  let sortS2 = s2.split("").sort().join("");
  for (let i = 0; i < sortS1.length; i++) {
    if (sortS1[i] != sortS2[i]) return false;
  }
  return true;
}
console.log(isAnagram(string1, string2));
