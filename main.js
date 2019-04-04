// A var to hold the constant url .
var imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

// A function that takes the value of the input search
function getMovieData (event) {
  event.preventDefault();
  var searchValue = document.getElementById("search").value;

  // The first function to give the data from the first api
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
         document.getElementById("average" + (indx + 1)).textContent = "The vote average is: " + el.vote_average;
       });
      informationArr.forEach(function(el, indx){
        document.getElementById("image" + (indx + 1)).src = imgUrl + el.poster_path;
      })
    })
    .catch(function(error) {
      console.log(error);
    })

    // This is the second function for the second api ("more information" key)
    // Inside the first function
    document.getElementById("buttonInfo").addEventListener("click", movieInfo);
    function movieInfo(event) {
      event.preventDefault();
      document.getElementById("mainTable").style.display  ="block";
      var searchValue = document.getElementById("search").value;
      var arrId = ["Title", "Runtime", "Genre", "Director", "Writer", "Actors", "Language", "Country", "Awards", "Type", "BoxOffice", "Production"];
      fetch("http://www.omdbapi.com/?t=" + searchValue +"&apikey=372f4e36")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          arrId.forEach(function(el) {
          document.getElementById(el).textContent = data[el];
          })
        })
    }
}

document.getElementById("buttonSearch").addEventListener("click", getMovieData);
