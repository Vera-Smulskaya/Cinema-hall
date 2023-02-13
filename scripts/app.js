const movies = [{
title: "Twilight",
image: "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/314678-Product-0-I_1920x.jpg?v=1572272185",
description: "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
date: "2008",
duration: "2 hours"
}, {
title: "Pride & Prejudice",
image: "https://s12.stc.yc.kpcdn.net/share/i/12/6172202/de-1200.jpg",
description: "Love develops between Elizabeth Bennet, a young woman of rank with no fortune, and Mr. Darcy, a handsome yet reserved man whose large estate is entailed upon his cousin. ",
date: "2005",
duration: "2 hours"
}]

{/* <article class="card">
        <header class="card__header">
          <h2 class="card__title">Twilight</h2>
          <span class="card__info">2008 - 2 hours</span>
        </header>
        <section class="card__content">
          <p class="card__description">When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.</p>
          <hr>
          <p>Hellen Catherine Hardwicke</p>
        </section>
      </article> */}

function createContent(movie) {
const article = document.createElement("article");
article.classList.add("card");

const header = document.createElement("header");
header.classList.add("card__header");
header.style.backgroundImage = `url(${movie.image})`;

const h2 = document.createElement("h2");
h2.classList.add("card__title");
h2.textContent = movie.title;

const info = document.createElement("span");
info.classList.add("card__info");
info.textContent = `${movie.date} - ${movie.duration}`;

const section = document.createElement("section");
section.classList.add("card__content");

const description = document.createElement("p");
description.classList.add("card__description");
description.textContent = movie.description;

const line = document.createElement("hr");

const director = document.createElement("p");
director.textContent = movie.director;
}
