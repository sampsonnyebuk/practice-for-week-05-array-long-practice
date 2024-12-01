const findMinimum = arr => {
  // O(n) as we iterate through the array once
  let min = Infinity;
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
};

// Time Complexity: O(n) - One traversal of the array
// Space Complexity: O(1) - Constant space used for the `min` variable
const runningSum = arr => {
  // O(n) as we iterate through the array once
  const result = [];
  let sum = 0;
  for (let num of arr) {
    sum += num;
    result.push(sum); // O(1)
  }
  return result;
};

// Time Complexity: O(n) - One traversal of the array
// Space Complexity: O(n) - Additional array to store the running sum
const evenNumOfChars = arr => {
  // O(n) as we iterate through the array once
  let count = 0;
  for (let str of arr) {
    if (str.length % 2 === 0) {
      count++;
    }
  }
  return count;
};

// Time Complexity: O(n) - One traversal of the array
// Space Complexity: O(1) - Constant space used for `count`

const smallerThanCurr = arr => {
  // O(n^2) as we compare each pair of elements
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

// Time Complexity: O(n^2) - Nested loops
// Space Complexity: O(n) - Additional array to store results

const twoSum = (arr, target) => {
  // O(n) as we use a hash map to store values
  const seen = new Set(); // O(1) average insertion/check
  for (let num of arr) {
    if (seen.has(target - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

// Time Complexity: O(n) - Single loop with hash map operations
// Space Complexity: O(n) - Hash map to store seen numbers

const secondLargest = arr => {
  // O(n) as we traverse the array twice
  let max = -Infinity, secondMax = -Infinity;
  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }
  return secondMax;
};

// Time Complexity: O(n) - Single traversal of the array
// Space Complexity: O(1) - Constant space used for `max` and `secondMax`

const shuffle = arr => {
  // O(n) for Fisher-Yates shuffle
  const shuffled = [...arr]; // O(n) to create a copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // O(1) random index
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // O(1) swap
  }
  return shuffled;
};

// Time Complexity: O(n) - Fisher-Yates shuffle
// Space Complexity: O(n) - Copy of the original array
