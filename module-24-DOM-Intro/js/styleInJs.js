const sections = document.querySelectorAll("section");
console.log(sections);

for (const iterator of sections) {
   iterator.style.border = "1px solid black";
   iterator.style.marginBottom = "20px";
   iterator.style.padding = "20px";
}
