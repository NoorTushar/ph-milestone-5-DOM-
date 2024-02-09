/**********************
 * getElementsByTagName
 **********************/

// ul, li, h1, p, etc. aigula shob kintu tags.

/*
const all_ul = document.getElementsByTagName("li");

console.log(all_ul);
*/

/**********************
 * getElementById
 **********************/

const programTitle = document.getElementById("programs-title");

programTitle.style.color = "red";
programTitle.style.backgroundColor = "yellow";

console.log(programTitle.getAttribute("id"));

/**********************
 * getElementsByClassName
 **********************/

const fruitItem = document.getElementsByClassName("fruit-item");
