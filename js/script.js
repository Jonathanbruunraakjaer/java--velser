// const venner = ["jonathan", "anna", "mina"];
// console.log(venner);

// const section = document.querySelector("section");
// venner.forEach(visNavne);

// function visNavne(elm, i) {
//   section.innerHTML += `<p>${elm} er sød ${i}</p>`;
// }
const endpoint = "https://kea-alt-del.dk/t7/api/products?start=43800&limit=25";

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    produktliste.innerHTML += `<article class="card">
    <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede"/>
        <h2>${element.productdisplayname}</h2>
        <h3>${element.gender}</h3>
         <p>${element.season}</p>
        <p>${element.price} kr,-</p>
        <p>${element.brandname}</p>
      </article>`;
  });
}

const produktliste = document.querySelector(".produktliste");
