//1.click event
document.getElementById('btnAdd').addEventListener('click',function(){
    alert('Added  to cart.....')
})

//2.mouserver event
document.getElementById('box').addEventListener('mouseover',() =>{
    console.log('mouse over.......')
})

//3.mouseout event
document.getElementById('box').addEventListener('mouseout',() =>{
    console.log('mouse out.....')
})

//4.keydown event
let userNamefield = document.getElementById('userName')
userNamefield.addEventListener('keydown',(event)=>{
    console.log(event)
    console.log('keydown..........' + event.jey)
})

//5.KeyUp event
userNameField.addEventListener('keyUp',() =>{
    console.log('keyUp..........')
})

//6.submit event
