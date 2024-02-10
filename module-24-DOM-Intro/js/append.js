const languageUL = document.querySelector("#languages-list");

const myLi2 = document.createElement("li");

myLi2.innerText = "List Item created By Js 2";

languageUL.appendChild(myLi2);

// let us create a new section

// 1. where to add

const mainContainer = document.querySelector("#main-section");

// 2. create a section

const section = document.createElement("section");
mainContainer.appendChild(section);

// 3. create the header inside the section
const myh1 = document.createElement("h1");
myh1.innerText = "This is a New Section Created by JavaScript DOM";
section.appendChild(myh1);

// 4. create an UL inside the section
const myUL2 = document.createElement("ul");
section.appendChild(myUL2);

// 5. create list items inside your UL

const myLi3 = document.createElement("li");
myLi3.innerText = "Dynamic List 1";
myUL2.appendChild(myLi3);

const myLi4 = document.createElement("li");
myLi4.innerText = "Dynamic List 2";
myUL2.appendChild(myLi4);

const myLi5 = document.createElement("li");
myLi5.innerText = "Dynamic List 3";
myUL2.appendChild(myLi5);

/****************
 * set innerHTML directly
 ***************/

const sectionDress = document.createElement("section");

sectionDress.
