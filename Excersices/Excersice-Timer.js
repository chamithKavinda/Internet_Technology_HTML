// let count = 1;

// const intervalId = setInterval(() => {
//   if (count <= 10) {
//     console.log(count);
//     count++;
//   } else {
//     clearInterval(intervalId); 
//   }

// }, 2000);

// const intervalId = setInterval(() => {

//       console.log('ABCD');

//     }, 1000);

// console.log('ABCD')

// setTimeout(()=>{
//     clearInterval(intervalId)
// },5000)

const intervalId = setInterval(() => {

    console.log('PQRS');

  }, 200);

console.log('PQRS')

setTimeout(()=>{
  clearInterval(intervalId)
},5000)
