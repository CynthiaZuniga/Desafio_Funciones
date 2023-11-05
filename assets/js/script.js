function Pintar(color = "green") {
  ele.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  Pintar ("yellow");
});
