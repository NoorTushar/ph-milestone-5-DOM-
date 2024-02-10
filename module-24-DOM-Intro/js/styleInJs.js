const sections = document.querySelectorAll("section");

for (const iterator of sections) {
   iterator.style.border = "1px solid black";
   iterator.style.marginBottom = "20px";
   iterator.style.padding = "20px";
}

/**
 ********* Node List
 * Every HTML element is a Node in DOM.
 */

const languageContainer = document.getElementById("language-container");

// Grab the UL to which we want to add the list item
const myUL = document.querySelector("#language-container ul");

// Create a List Element through JS
const myLi = document.createElement("li");

// Give some text inside the created List Element
myLi.innerText = "List Created By JavaScript";

// Add the created List Element to the UL
myUL.appendChild(myLi);
