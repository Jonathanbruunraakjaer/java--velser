const venner = ["jonathan", "anna", "mina"];
console.log(venner);

const section = document.querySelector("section");
venner.forEach(visNavne);

function visNavne(elm, i) {
  section.innerHTML += `<p>${elm} er sød ${i}</p>`;
}
