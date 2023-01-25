// my top 5 favorite movies
const myFavMovies = " Lilo & Stitch,  Bend it Like Beckham,  Pride & Predjudice,  Sleeping With Other People,  Sound of Music" .split(", ");
console.log("my top 5 favorite movies", myFavMovies);

// user input favorite movie
const yourFavMovie = window.prompt("what is your favorite movie?");
console.log("your favorite movie is", yourFavMovie);

// add your fav movie to my top 5 movies
myFavMovies.push(" and " + yourFavMovie);
console.log("our favorite movies are:", myFavMovies);

// present complete list of our fav movies
window.alert("our favorite movies are: " + myFavMovies);