const cases = [
  { input: [1, 2, 3, 5, 6, 8, 9], output: [1, 4, 9, 25, 36, 64, 81] },
  { input: [-2, -1], output: [1, 4] },
  { input: [-10, -5, 0, 5, 10], output: [0, 25, 25, 100, 100] },
];

function sortedSquaredArray(arr) {
  return arr.map((element) => Math.pow(element, 2)).sort((a, b) => a - b);
}

cases.forEach((el, idx) => {
  const receivedValue = sortedSquaredArray(el.input);

  console.log(`testCase: ${idx + 1}`);
  console.log(`receivedValue: [${receivedValue}] isEqual: ${receivedValue.toString() === el.output.toString()}` 
      );
});
