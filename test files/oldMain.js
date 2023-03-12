//empty arr to store all book objects created.
let booksArr = [];
//array to store new book in books
let newBookArr = {
    book: "",
    author: "",
    genre: "",
    rating: 0
};

//this will be used to check userstorage. if the person has accessed the site before, storage will be used.
function myLoad() {
   //i think i need to do this first. use logic from example here to try and make addBook() work. 
   //UPDATE: function is not needed yet (will only check if data has not been entered yet) but set/get storage is


    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
       // let arrayOfPersonObjects = [];
        sessionStorage.setItem("booksArray", JSON.stringify(booksArr));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        booksArr = JSON.parse(sessionStorage.getItem("booksArray"));//Get the array of person objects from sessionStorage and assign it to the array 'pers'
        let i = 0;
        pers.forEach(function(p) {//Loop through each person (p) in the pers array
            /*For each person in the array create an option element that displays 
            that person's name and add it to the select (dropdown) element on the HTML page */
            let optItem = document.createElement("option");
            optItem.innerHTML = p.name.first;
            optItem.value = i;
            i = i + 1;
            htmlSelect.appendChild(optItem);
        });
        if (i > 0) {//Only make the select element visible once there is at least one person object added that the user can select.
            htmlSelect.style.visibility = "visible";
        }
    }
}

let getBookList = document.getElementById("bookList")
let book = document.getElementById("book");
let author = document.getElementById("author");
let genre = document.getElementById("genre");
let rating = document.getElementById("rating");

const addBook = () => {
    
    //adds inputs to array //does not work
    newBookArr.book = book.value;
    newBookArr.author = author.value;
    newBookArr.genre = genre.value;
    newBookArr.rating = rating.value;
    //console.log(newBookArr)
    //a new array is created with the above inputs, then pushed to booksArr
    booksArr.push(newBookArr);
    console.log(booksArr)

    
    //creates a new option, intended to be used in the drop down list
    option = document.createElement("option");
    //selects the final element of the array to add to the <option>
    let bookListItem = booksArr[booksArr.length -1];
    //text to be added to new option. Value of book
    option.innerText = bookListItem.book;
    //console.log(bookListItem.book)
    option.value = "";
    //array is returned with alert
    //alert(bookListItem)
    getBookList.appendChild(option);
    //resetting userInput box to default value after onClick event
    //getInput.value = "";

};

//resets newBookArr after update function
newBookArr = {
    book: "",
    author: "",
    genre: "",
    rating: 0
};











//I want to practice DOM manipulation and I really hate times new roman
document.body.style.fontFamily = "arial"