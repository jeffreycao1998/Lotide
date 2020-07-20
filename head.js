const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = (array) => {
  return array[0];
}

assertEqual(head([1], 1));
assertEqual(head(['Yellow', 'Red'], 'Yellow'))
assertEqual(head([], undefined));