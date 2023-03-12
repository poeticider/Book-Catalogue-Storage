//sets key:WelcomePhrase Value:Hello World
sessionStorage.setItem("WelcomePhrase", "Hello World");
//retrieves storageItem Value and saves to an object
let testItem = sessionStorage.getItem("WelcomePhrase");

//prints the objects in the h2 element h2Hello
document.getElementById("h2Hello").innerHTML = (testItem);