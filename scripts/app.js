const movies = [
  {
    title: "Twilight",
    image:
      "https://i.pinimg.com/550x/13/59/69/1359696e1122c35769af521a74ed0dcb.jpg",
    description:
      "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
    date: "2008",
    duration: "2 hours",
    director: "Catherine Hardwicke",
  },
  {
    title: "Pride & Prejudice",
    image:
      "https://64.media.tumblr.com/aeeaedd556f7b472480ae6628a60d957/bd2bfb2eb35454d1-d3/s640x960/654dbb8f38eaf287608fb394f3aff7b784d6542f.jpg",
    description:
      "Love develops between Elizabeth Bennet, a young woman of rank with no fortune, and Mr. Darcy, a handsome yet reserved man whose large estate is entailed upon his cousin. ",
    date: "2005",
    duration: "2 hours",
    director: "Joe Wright",
  },
];

// function createContent(movie) {
//   const article = document.createElement("article");
//   article.classList.add("card");

//   const header = document.createElement("header");
//   header.classList.add("card__header");
//   header.style.backgroundImage = `url(${movie.image})`;

//   const h2 = document.createElement("h2");
//   h2.classList.add("card__title");
//   h2.textContent = movie.title;

//   const info = document.createElement("span");
//   info.classList.add("card__info");
//   info.textContent = `${movie.date} - ${movie.duration}`;

//   header.appendChild(h2);
//   header.appendChild(info);

//   const section = document.createElement("section");
//   section.classList.add("card__content");

//   const description = document.createElement("p");
//   description.classList.add("card__description");
//   description.textContent = movie.description;

//   const line = document.createElement("hr");

//   const director = document.createElement("p");
//   director.textContent = movie.director;

//   section.appendChild(description);
//   section.appendChild(line);
//   section.appendChild(director);

//   article.appendChild(header);
//   article.appendChild(section);

//   return article;
// }

function createContentTemplate(movie) {
  const article = `<article class="card">
  <header class="card__header" style="background-image: url(${movie.image})">
    <h2 class="card__title">${movie.title}</h2>
    <span class="card__info">${movie.date} - ${movie.duration}</span>
  </header>
  <section class="card__content">
    <p class="card__description">${movie.description}</p>
    <hr>
    <p>${movie.director}</p>
  </section>
</article> `;

return createFragmentTemplate(article);
}

function createFragmentTemplate(str) {
  const template = document.createElement("template");

  template.innerHTML = str;

  return template.content;
}

function appendContent(content) {
  const el = document.getElementById("content");

  el.appendChild(content);
}

function init() {
  const fragment = document.createDocumentFragment();

  movies.forEach((movie) => {
    fragment.appendChild(createContentTemplate(movie));
  });

  appendContent(fragment);
}

init(movies);
