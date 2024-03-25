let index = "cross";
const OnClickFunction = (id) => {
  const cellcross = document.getElementById(id).children[0];
  const cellzero = document.getElementById(id).children[1];
  console.log(cellcross, cellzero);
  console.log(index);
  if (index === "cross" && !cellcross.classList.contains("show") && !cellzero.classList.contains("show")) {
    cellcross.classList.add("show");
    index = "zero";
    return;
  }
  if (index === "zero" && !cellcross.classList.contains("show") && !cellzero.classList.contains("show")) {
    cellzero.classList.add("show");
    index = "cross";
    return;
  }
};
const onBtnClick = () => {
  document.querySelectorAll(".show").forEach((el) => el.classList.remove("show"));
};
