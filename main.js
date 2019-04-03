// // We create a var to hold the constant url .
var imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

// Create a function that take the value of the input search
function getMovieData (event) {
  event.preventDefault();
  var searchValue = document.getElementById("search").value;

  // Create a fetch function to give the data we need by useing the api .
  fetch("https://api.themoviedb.org/3/search/movie?api_key=3bbdbed2c291857dbe65e935c9dea7ed&language=en-US&query=" + searchValue + "&page=1&include_adult=false")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
       var informationArr = [data.results[0], data.results[1], data.results[2]];
       informationArr.forEach(function(el, indx){
         document.getElementById("title" + (indx + 1)).textContent = el.title;
         document.getElementById("date" + (indx + 1)).textContent = el.release_date;
         document.getElementById("summary" + (indx + 1)).textContent = el.overview;
         document.getElementById("average" + (indx + 1)).textContent = el.vote_average;
       })
       .then(function(data) {
      informationArr.forEach(function(el, indx){
        document.getElementById("image" + (indx + 1)).src = imgUrl + el.poster_path;
      })
    })
  })
  .catch(function(error) {
    console.log(error);
  })
}

// ************************************************************************

// this is the second api
function movieInfo(event) {
  event.preventDefault();
  var searchValue = document.getElementById("search").value;
  console.log("search = ", searchValue);
  var arrId = ["Title", "Runtime", "Genre", "Director", "Writer", "Actors", "Language", "Country", "Awards", "Type", "BoxOffice", "Production"];
  console.log(arrId);
  fetch("http://www.omdbapi.com/?t=" + searchValue +"&apikey=372f4e36")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("movieInfo: ", data)
      arrId.forEach(function(el) {

      console.log(data[el]);
      document.getElementById(el).textContent = data[el];

     })

    // .catch(function(error) {
    //   console.log(error);
    //  })
 })
}

document.getElementById("buttonInfo").addEventListener("click", movieInfo);
document.getElementById("buttonSearch").addEventListener("click", getMovieData);
