let box = document.getElementById('box')
console.log(box)


//1.innerHTML property

console.log(box.innerHTML)

box.innerHTML = "<h1>Hello World</h1>";
console.log(box.innerHTML);

//2. textContent property- sets or return the the text content of an element EXCLUDING any HTML tags

console.log(box.textContent)
box.textContent = "Dias Ge Nangi"
console.log(box.textContent)


let image = document.getElementById('img')
console.log(image);


image.style.width = "500px";
image.style.height = "300px";


//3. setAttribute sets the value of an attribute

//image.setAttribute('src', '/assets/1.webp')


//4.class List

console.log(box.classList)
box.classList.add('aaa','bbb','ccc')

box.classList.remove('ccc')


box.classList.replace("aaa","mmm")



//append and append child


let parentDiv = document.createElement('div')
box.append(parentDiv)


let childDiv = document.createElement('div')
childDiv.setAttribute('attribute', 'new')
childDiv.appendChild(childDiv)


let parentDiv1 = document.createElement('div')
box.append(parentDiv1)


let childDiv1 = document.createElement('div')
childDiv.setAttribute('attribute', 'new')
childDiv.appendChild(childDiv1)


//7. Remove and removeChild


parentDiv.removeChild(childDiv)
parentDiv.remove()