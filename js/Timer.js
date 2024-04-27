//1.setTimeout - execute a function once after a specific delay
//setTimeout(calback,delay)

setTimeout(function(){
    console.log('hellowww')
},1000)

//cancel the timeout
clearInterval(timeout)

//2.setInterval
let greet = ()=>{
    console.log('helloww')
}

let interval = setInterval(greet,1000)

//cancel the interval
clearInterval(interval)



