let burger = ['bottom bun', 'beef patty', 'cheese', 'onion', 'tomato', 'lettuce', 'top bun']

// Task: write each ingredient to the JavaScript console
// number of items in burger object must match burger[] because this points to an index in the array
// index starts at 0

// without a loop
console.log(burger[0])
console.log(burger[1])
console.log(burger[2])
console.log(burger[3])
console.log(burger[4])
console.log(burger[5])
console.log(burger[6])
console.log(burger[7])

// with a loop
// curley brackets stops and ends the loop code
for (let i = 0; i < burger.length, i++) {
  let ingredent = burger[i]
  console.log(ingredient)
}




//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output