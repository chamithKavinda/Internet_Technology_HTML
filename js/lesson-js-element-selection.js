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