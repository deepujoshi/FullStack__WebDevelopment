var list = document.querySelector('ul')
console.log(list)

var arr =['go to gym','cook oatmeal' , 'eat']

for(var i=0; i< arr.length; i++){
  var element = document.createElement('li')
  var node = document.createTextNode(arr[i])
element.appendChild(node)
list.appendChild(element)
}