var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

const callbackfunc = (event) => {
  // // console.log(event.target)
  // console.log(input.value)
  const inputValue = input.value
  const element = document.createElement('li')
  const node = document.createTextNode(input.value)
  element.appendChild(node)
  list.appendChild(element)
}

button.addEventListener('click', callbackfunc)