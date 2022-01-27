const cases = [
  { input: "AAAAAAAAAAAAABBCCCCDD", output: "9A4A2B4C2D" },
  { input: "aA", output: "1a1A" },
  { input: "122333", output: "112233" },
];

function compress(str) {
  // 1. create chunks 10 chars.
  const chunks = splitString(str);

  // 2. split chunk string
  // 2.1 for each char count occurrences within string.
  const maps = chunks.map(processChunk);

  // transform mapCount to string.

  return maps.reduce((acc, curr) => {
    Object.keys(curr).forEach((key) => {
      acc += `${curr[key]}${key}`;
    });

    return acc;
  }, "");
}

function splitString(str) {
  return str.match(/.{1,9}/g);
}

function processChunk(chunkString) {
  // 2.2 add count to mapCount
  const mapCount = {};
  const chars = chunkString.split("");

  chars.forEach((char) => {
    if (!mapCount[char]) {
      mapCount[char] = 0;
    }

    mapCount[char]++;
  });

  return mapCount;
}

cases.forEach((el, idx) => {
  const receivedValue = compress(el.input);

  [el.output, receivedValue].forEach(console.dir);

  console.log(`testCase: ${idx + 1}`);
  console.log(
    `receivedValue: ${receivedValue} isEqual: ${receivedValue === el.output}`
  );
});
