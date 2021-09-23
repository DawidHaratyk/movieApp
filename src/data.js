import image from "./image.png";

const categories = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

const searchData = [
  {
    min: 1990,
    max: 2021,
    title: "Year",
  },
  {
    min: 0,
    max: 10,
    title: "Rating",
  },
  {
    min: 0,
    max: 300,
    title: "Runtime",
  },
];

export default categories;
export { image, searchData };
