let box = document.getElementById('box')
console.log(box)

//1.inner HTML
console.log(box.innerHTML)
box.innerHTML = 'Helloww'
console.log(box.innerHTML)

//2.textContent - sets for return the content of elements,excluding tags
console.log(box.textContent)
box.textContent = 'kamal perera'
console.log(box.textContent)

//3.innerText
console.log(box.innerText)
box.innerText= 'saman'
console.log(box.innerText)

//4.Applying Styles
//let img = document.getElementById('img')
img.style.width = "100px"
img.style.height = "100px"

//5.setAttribute - sets the value of 
//img.setAttribute('src','/assest/gallery 13.jpg')

//6.classList
console.log(box.classList)
box.classList.add('aaa','bbb','ccc')

box.classList.remove('ccc')
console.log(box.classList)

box.classList.replace('aaa','mmm')

//7.append & appendChild
let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
childDiv.setAttribute('attr','nav')
parentDiv.appendChild(childDiv)


