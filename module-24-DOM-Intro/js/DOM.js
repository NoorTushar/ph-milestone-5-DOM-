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

// console.log(programTitle.getAttribute("id"));

programTitle.classList.add("dynamic-1");

// console.log(programTitle.classList);

programTitle.classList.remove("some-class");

// console.log(programTitle.classList);

/**********************
 * getElementsByClassName
 **********************/

const fruitItem = document.getElementsByClassName("fruit-item");

const headerTitle = document.getElementById("header-title");

headerTitle.setAttribute("class", "header-title");

const emptyAnchor = document.getElementById("empty-anchor");
emptyAnchor.setAttribute("href", "index.html");
// console.log(emptyAnchor.innerText);
// console.log(emptyAnchor.innerHTML);
