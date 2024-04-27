console.log("Hello JS")

//ID Selector
let calculateButton = document.getElementById('btnCalculate')
console.log(calculateButton)
calculateButton.style.backgroundColor = 'blue'

//button click event listner
calculateButton.addEventListener('click',function(){
    alert('Hello World!!!!!!!!!!!1')
})

calculateButton.addEventListener('click',()=>alert('Hello World!!!!!!!!!!!1')
)

//class Selector
let boxes = document.getElementsByClassName('box')
console.log(boxes)

//tag Selector
let headingOnes = document.getElementsByTagName('h1')
console.log(headingOnes)

//querySelector
let button = document.querySelector('btnCalculate')
console.log(button)

let testDiv = document.querySelector('-test-div')
console.log(testDiv)

let box = document.querySelector('.box')
console.log(box)

let hb4 = document.querySelectorAll('.box')
console.log(hb4)

let bb = document.querySelectorAll('#container .box')
console.log(bb)