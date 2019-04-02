// We create a var to hold the constant url .
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
      var result1 = data.results[0];

      document.getElementById("title1").textContent = result1.title;
      document.getElementById("image1").src = imgUrl + result1.poster_path;
      document.getElementById("date1").textContent = result1.release_date;
      document.getElementById("summary1").textContent = result1.overview;
      document.getElementById("average1").textContent = result1.vote_average;

      var result2 = data.results[1] ;

      document.getElementById("title2").textContent = result2.title;
      document.getElementById("image2").src = imgUrl + result2.poster_path;
      document.getElementById("date2").textContent = result2.release_date;
      document.getElementById("summary2").textContent = result2.overview;
      document.getElementById("average2").textContent = result2.vote_average;

      var result3 = data.results[2] ;

      document.getElementById("title3").textContent = result3.title;
      document.getElementById("image3").src = imgUrl + result3.poster_path;
      document.getElementById("date3").textContent = result3.release_date;
      document.getElementById("summary3").textContent = result3.overview;
      document.getElementById("average3").textContent = result3.vote_average;

})
    //console.log(data);

  .catch(function(error) {
    console.log(error);
  })
}
// Adding a callback to have a click
document.getElementById("button").addEventListener("click", getMovieData);

// ************************************************************************

// this is the second api
fetch("http://www.omdbapi.com/?t=" + searchValue +"&apikey=372f4e36")
  .then(function(response) {
    return response.json();
  })
      .then(function(data) {
