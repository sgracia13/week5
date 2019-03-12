let movieTitle = document.getElementById("movieTitle")
let movieInfo = document.getElementById("movieInfo")
let button = document.getElementById("button")




button.addEventListener('click', function(){
let movieURl = "http://www.omdbapi.com/?s=batman&apikey=caa3870b"
let request = new XMLHttpRequest()
request.open("GET",movieURl)
request.send()
request.onload = function() {

    if(request.status != 200) {
        console.log("not found")
     } else {
            console.log("received")
            console.log(request.responseText)
            console.log(JSON.parse(request.responseText))
            let moviesResponse = JSON.parse(request.responseText)
            displayMovieDetails(moviesResponse)
            
        }
    }



function displayMovieDetails(movie) {
    
    //movieTitle.innerHTML = movie.Title

    let movieLIItems = movie.Search.map(function(movie)
    {
        return `
        
        <li>
        <div>${movie.Title}</div>
         <img src = "${movie.Poster}">
        </li>
         
                    `
    })
    movieInfo.innerHTML = movieLIItems.join('')
}



})


