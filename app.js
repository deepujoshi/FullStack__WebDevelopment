const ul = document.querySelector('ul')
const button = document.querySelector('button')
const getText = document.querySelector('input')

const getData = async (item) => {
  console.log(item)
  let url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=Pizza`
  console.log(url)
  const res = await fetch(url)
  const data = await res.json()
  console.log()
  data.hits.forEach(recipe => {
      console.log(recipe)
  })
}

// add event listener to  button
button.addEventListener('click' , (e) => {
      console.log(getText.value);
})
