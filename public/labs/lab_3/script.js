let width = 130; 
let count = 3; 
let list = package.querySelector("ul");
let listElems = package.querySelectorAll("li");
let position = 0;

package.querySelector(".prev").onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

package.querySelector(".next").onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
