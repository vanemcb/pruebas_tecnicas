/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`)

let steps = [1, 2]
let N = parseInt(args)

//Function created to implement recursion
function stairs(steps, N) {

  //Conditions to stop calling itself
  if (N == 0) {
    return 1
  }
  if (N < 0) {
    return 0
  }

  let combinations = 0

  //Loop to implement the recursion with each step
  for (let step of steps) {
    combinations += stairs(steps, N - step)
  }

  return combinations
}

console.log(stairs(steps, N))
