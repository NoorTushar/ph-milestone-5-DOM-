function cyan() {
   document.body.style.backgroundColor = "cyan";
}

const cyanBtn = document.querySelector("#cyanBtn");
cyanBtn.onclick = cyan;

const pinkBtn = document.querySelector("#pinkBtn");

// pinkBtn.addEventListener("click", function () {
//    document.body.style.backgroundColor = "pink";
// });

// OR
function makePink() {
   document.body.style.backgroundColor = "pink";
}

pinkBtn.addEventListener("click", makePink);

document.querySelector("#e").addEventListener("click", (e) => {
   console.log(e);
});

document.getElementById("in").addEventListener("keyup", (e) => {
   console.log(e.target.value);
});
