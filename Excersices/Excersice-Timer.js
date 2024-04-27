let count = 1;

const intervalId = setInterval(() => {
  if (count <= 10) {
    console.log(count);
    count++;
  } else {
    clearInterval(intervalId); 
  }
}, 100);