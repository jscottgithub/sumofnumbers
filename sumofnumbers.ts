function sumFor(input: number[]) {
  let j;
  let sum = 0;
  for (j = 0; j < input.length; j++) {
    sum += input[j];
  }
  console.log('Sum: ', sum);
  return sum;
}

function sumWhile(input: number[]) {
  let k = 0;
  let sum = 0;
  while (k < input.length) {
    sum += input[k];
    k++;
  }
  console.log('Sum: ', sum);
  return sum;
}

function sumRecursion(input: number[], depth: number = 0) {
  if (depth >= input.length) {
    return 0;
  }
  const sum: number = input[depth] + sumRecursion(input, depth + 1);
  if (depth === 0) {
    console.log('Sum: ', sum);
  }
  return sum;
}

function sumTheFunctionalWay(input: number[]) {
  const output: number = input.reduce((bucket, next) => bucket + next, 0);
  console.log('Sum: ', output);
  return output;
}

const testInput = [1, 2, 3, 4, 5];
sumFor(testInput);
sumWhile(testInput);
sumRecursion(testInput);
sumTheFunctionalWay(testInput);
