import create from "./create.js";
import sidebar from "./listeners.js"
import apple from "./search.js"
import manageFavs from "./listeners.js"
const searchinput = document.querySelector("[searchinput]");
const searchButton = document.querySelector("[searchbutton]");
const profileButton = document.querySelector("[myProfile]");
// const movieDisplay = document.querySelector(".movieContainer")
const randomPage = Math.floor(Math.random()*10);
async function getmovies() {
    const res = await fetch(`https://www.omdbapi.com/?apikey=51cb8783&s=movie&page=${randomPage}.`);
    // const res = await fetch(`https://66c8f3448a477f50dc2fa829.mockapi.io/movies`);
   
    const data1 = await res.json();
    const data = Object.entries(data1)[0][1]
    console.log(data)
    apple.searchinputevent(searchinput,data);
    create.create(data)
    manageFavs.manageFavs(data);
    sidebar.activatesidebar(profileButton);

}





getmovies();



// console.log("Apple",sidebar.activatesidebar(profileButton));
// console.log("lll",Array.from(sidebar.classList).includes("active"))

// const Cardcontainer = document.createElement("div");
// const dataContainer = document.createElement("div")
// const image = document.createElement("img");
// const genre = document.createElement("p");
// const imdbRating = document.createElement("P")
// const duration = document.createElement("p")
// const title = document.createElement("p")
// const like = document.createElement("div")
// like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
// <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
// </svg>`
// like.classList.add("like")
// Cardcontainer.classList.add("card")
// title.innerHTML = `<b>Title :</b> ${data?.Title}`
// title.classList.add("title")
// genre.innerHTML =  `<b>Genre:</b> ${data?.Genre}`;
// genre.classList.add("genre")
// image.src = data?.Poster;
// image.classList.add("image")
// imdbRating.innerHTML =  `<b>imdb Rating:</b> ${data?.imdbRating}`;
// imdbRating.classList.add("imdb")
// duration.innerHTML = `<b>Duration:</b> ${data?.Runtime}`;
// dataContainer.classList.add("datacontainer")



// Cardcontainer.appendChild(image);
// dataContainer.appendChild(title);
// dataContainer.appendChild(genre);
// dataContainer.appendChild(imdbRating);
// dataContainer.appendChild(duration)
// Cardcontainer.appendChild(dataContainer);
// Cardcontainer.appendChild(like);
// movieDisplay.appendChild(Cardcontainer);
