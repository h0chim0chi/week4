let quotes = [
  "May the Force be with you.",
  "I'm the king of the world!",
  "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
  "You can't handle the truth!",
  "If you build it, he will come.",
  "Keep your friends close, but your enemies closer.",
  "You talking to me?",
  "I'll have what she's having.",
  "You had me at 'hello'."
]

// Tasks:
// 1) loop through the movie quotes and write them to the output (with Tailwind)
// 2) refactor into cleaner, easier-to-understand functions

// EventTarget.addEventListener(type, listener)
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// Element.insertAdjacentHTML(position, text)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

window.addEventListener('DOMContentLoaded', function() {
  let outputElement = document.querySelector('.output')
  // outputElement.insertAdjacentHTML('beforeend', '<h1>Hello!</h1>')
  // outputElement.insertAdjacentHTML('beforeend','<h1>Hello 2!</>')

  // 1a. loop through the movie quotes
  for (let i=0; i < 99, i++) {
    // console.log(`hey, index is ${i}`)
    let quote = quotes[i]
    console.log(quote)

  //1b. write them to the output with Tailwind
  let outputElement = document.querySelector('.output')
  outputElement.insertAdjacentHTML('beforeend', `<h1 class="font-bold my-8 text-xl text-blue-300">${quote}</h>`)
  }
})

// refactor code
function appendQuote(string) {
  let outputElement = document.querySelector('.output')
  outputElement.insertAdjacentHTML('beforeend', `<h1 class="font-bold my-8 text-xl text-blue-300">${string}</h>`)
  }
})

// refactor code example 2
function pageLoaded() {
  for (let i = 0, i < quotes.length; i+1) {
      let quote = quotes[i]
      appendQuote(quote)
  }
}

// window.addEventListener('DOMContentLoaded', pageLoaded)

