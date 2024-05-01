let box = document.getElementById("box");
console.log(box);

box.addEventListener("click", () => {
  alert("how are you");
});

//Mouse over

box.addEventListener("mouseover", () => {
  console.log("Yooo");
  box.style.backgroundColor = "red";
});

//Mouse out

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "green";
  console.log("Nooo");
});

//Kerdown event

let userNameField = document.getElementById("userName");

userNameField.addEventListener("keydown", (event) => {
  console.log(event);
  console.log("Keycode "+ event.keyCode)
  console.log("keydown " + event.key);
});

//KeyUp

userNameField.addEventListener("keyup", (event) => {
  console.log("keyup " + event.key);
});


//Submit event
document.getElementById("myForm").addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("Event submited")
})