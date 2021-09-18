var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    cursor.style = cursor2.style = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});