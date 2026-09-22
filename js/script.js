// const venner = ["jonathan", "anna", "mina"];
// console.log(venner);

// const section = document.querySelector("section");
// venner.forEach(visNavne);

// function visNavne(elm, i) {
//   section.innerHTML += `<p>${elm} er sød ${i}</p>`;
// }

const biler = [
  {
    pris: 23000,
    model: "turbo",
    brand: "lada",
    farve: "orange",
    udstyr: ["rat", "sæder", "vinduer"],
  },
  {
    pris: 243000,
    model: "turbo",
    brand: "toyota",
    farve: "grøn",
    udstyr: ["rat", "sæder", "vinduer", "autopilot"],
  },
];
console.log(biler);

const produktliste = document.querySelector(".produktliste");

biler.forEach(visBiler);

function visBiler(bil) {
  produktliste.innerHTML += `<article class="card">
        <h2>${bil.brand}</h2>
        <h3>${bil.model}</h3>
        <p>${bil.pris}</p>
        <p>${bil.farve}</p>
      </article>`;
}
