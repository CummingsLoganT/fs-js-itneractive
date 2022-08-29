console.log("hello world")

// SO CONFUSING


function addMovie (event) {
    event.preventDefault()
    const inputField = document.querySelector("input");

    const movie = document.createElement("li");

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    const list = document.querySelector('ul');

    inputField.value = ""
}

document.querySelector("form").addEventListener("submit" , addMovie)