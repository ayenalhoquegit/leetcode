const nums = [1, 1, 0, 1, 1, 1];
let max_ones = 0;
let count = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 1) {
    count++;
    max_ones = max_ones > count ? max_ones : count;
  } else {
    count = 0;
  }
}

console.log(max_ones);

export {};
