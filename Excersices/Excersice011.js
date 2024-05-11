
console.log("hi")
const numericInput = document.getElementById("numericInput");

numericInput.addEventListener("keypress", (event) => {
  if (event.key < "0" || event.key > "9") {
    event.preventDefault();
     alert("Key is pressed");
  } 
});