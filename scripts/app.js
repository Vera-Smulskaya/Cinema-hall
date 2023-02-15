const movies = [
  {
    title: "Twilight",
    image:
      "https://i.pinimg.com/550x/13/59/69/1359696e1122c35769af521a74ed0dcb.jpg",
    description:
      "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
    date: "2008-12-05T00:00:00",
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
 
class Movie {
  constructor(movie) {
    this.title = movie.title;
    this.image = movie.image;
    this.description = movie.description;
    this.date = new Date(movie.date).getFullYear;
    this.director = movie.director;
    this.duration = movie.duration;
  }

  createContent() {
    const article = document.createElement("article");
    article.classList.add("card");
  
    const header = document.createElement("header");
    header.classList.add("card__header");
    header.style.backgroundImage = `url(${this.image})`;
  
    const h2 = document.createElement("h2");
    h2.classList.add("card__title");
    h2.textContent = this.title;
  
    const info = document.createElement("span");
    info.classList.add("card__info");
    info.textContent = `${this.date} - ${this.duration}`;
  
    header.appendChild(h2);
    header.appendChild(info);
  
    const section = document.createElement("section");
    section.classList.add("card__content");
  
    const description = document.createElement("p");
    description.classList.add("card__description");
    description.textContent = this.description;
  
    const line = document.createElement("hr");
  
    const director = document.createElement("p");
    director.textContent = this.director;
  
    section.appendChild(description);
    section.appendChild(line);
    section.appendChild(director);
  
    article.appendChild(header);
    article.appendChild(section);
  
    return article;
  }
}
class App {
  static renderAll(movie) {
    const el = document.getElementById("content");
    const fragment = document.createDocumentFragment();

    movies.forEach((movie) => {
      fragment.appendChild(new Movie(movie).createContent());
    });

    el.appendChild(fragment);
  }
}

App.renderAll(movies);

