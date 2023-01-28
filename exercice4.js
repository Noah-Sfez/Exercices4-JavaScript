
var button = document.querySelector("#button");
button.addEventListener("click", (event) =>{
    var  li = document.querySelectorAll("#liste li");
    li.forEach((element) => {
        element.classList.toggle("rouge")
    });
});