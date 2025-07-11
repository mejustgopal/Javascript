let button = document.getElementById("btn");
button.addEventListener("dblclick", () => {
    // alert("Button clicked!");
    document.querySelector(".box").innerHTML = "Content changed!";
    document.querySelector(".box").style.backgroundColor = "lightblue";
})

button.addEventListener("contextmenu", () => {
    alert("Dont! hack us by right clicking!");

})

document.addEventListener("keydown", (e) => {
    console.log(e.key,e.keyCode);

})