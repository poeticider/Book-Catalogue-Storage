//I am using example2 as a skeleton for this excercise as I was struggling.
//empty arr to store all book objects created.
let booksArr = [];

let getBookList = document.getElementById("bookList")

//putting keys in global scope
let liBook = "";
let liAuthor = "";
let liGenre = "";
let liRating = ""; 

//delete buttons for keys
let liBookBtn = "";
let liAuthorBtn = "";
let liGenreBtn = "";
let liRatingBtn = "";


//this will be used to check userstorage. if the person has accessed the site before, storage will be used.
function myLoad() {
   //i think i need to do this first. use logic from example here to try and make addBook() work. 
   //UPDATE: function is not needed yet (will only check if data has not been entered yet) but set/get storage is

    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("booksArray", JSON.stringify(booksArr));
        sessionStorage.setItem("hasCodeRunBefore", true);
        sessionStorage.setItem("selectedBookStorage", JSON.stringify({}));


    } else {
       
        booksArr = JSON.parse(sessionStorage.getItem("booksArray"));
        selectedBookInfo = JSON.parse(sessionStorage.getItem("selectedBookStorage"));
        
        let i = 0;
        booksArr.forEach(function(storedBookArr) {
            /*For each person in the array create an option element that displays 
            that person's name and add it to the select (dropdown) element on the HTML page */
            let optItem = document.createElement("option");
            optItem.innerHTML = storedBookArr.book;
            optItem.value = i;
            i = i + 1;   
            getBookList.appendChild(optItem);
        });
    //only displays the object if amount of keys are > 0 (means that undefined is not returned when creating first key)
    if(Object.keys(selectedBookInfo).length > 0) {

            liBook = document.createElement("li");
            liAuthor = document.createElement("li");
            liGenre = document.createElement("li");
            liRating = document.createElement("li"); 
            
            liBook.innerHTML = "Book: " + selectedBookInfo.book;
            liAuthor.innerHTML = "Author: " + selectedBookInfo.author;
            liGenre.innerHTML = "Genre: " + selectedBookInfo.genre;
            liRating.innerHTML = "Rating: " + selectedBookInfo.rating;

            getShowBooks.appendChild(liBook);
            getShowBooks.appendChild(liAuthor);
            getShowBooks.appendChild(liGenre);
            getShowBooks.appendChild(liRating);

            //creating delete buttons and appending them to each <li> item
            liBookBtn = document.createElement("button");
            liAuthorBtn = document.createElement("button");
            liGenreBtn = document.createElement("button");
            liRatingBtn = document.createElement("button"); 

            //adding editValue function to buttons onclick
            liBookBtn.setAttribute("onclick", "editValue(this)");
            liAuthorBtn.setAttribute("onclick", "editValue(this)");
            liGenreBtn.setAttribute("onclick", "editValue(this)");
            liRatingBtn.setAttribute("onclick", "editValue(this)");

            let liBookInput = document.createElement("input");
            let liAuthorInput = document.createElement("input");
            let liGenreInput = document.createElement("input");
            let liRatingInput = document.createElement("input");

            liBookBtn.innerHTML = "edit";
            liAuthorBtn.innerHTML = "edit";
            liGenreBtn.innerHTML = "edit";
            liRatingBtn.innerHTML = "edit";

            liBook.appendChild(liBookBtn);
            liAuthor.appendChild(liAuthorBtn);
            liGenre.appendChild(liGenreBtn);
            liRating.appendChild(liRatingBtn);

            liBookBtn.style.marginLeft = "1.5rem";
            liAuthorBtn.style.marginLeft = "1.5rem";
            liGenreBtn.style.marginLeft = "1.5rem";
            liRatingBtn.style.marginLeft = "1.5rem";

            liBook.appendChild(liBookInput);
            liAuthor.appendChild(liAuthorInput);
            liGenre.appendChild(liGenreInput);
            liRating.appendChild(liRatingInput);

            liBookInput.setAttribute("id", "liBookInput");
            liAuthorInput.setAttribute("id", "liAuthorInput");
            liGenreInput.setAttribute("id", "liGenreInput");
            liRatingInput.setAttribute("id", "liRatingInput");
        }   
    }   
}

//constructor. this should replace the key:value arrays within the booksArr to create Book objects
function BookObj(book, author, genre, rating) {
    this.book = book;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
}


//Function I am working on now. I need to select arr[object].key.value and change to userInput
const editValue = (editBtn) => {

    //editBtn is child of <li> so access to parentEle is needed
    let myLi = editBtn.parentElement
    //childNodes[2] was found in DOM properties on the browser devTools. It is the userInput 
    let myInput = myLi.childNodes[2]
    //need to check the key name to know which value to edit
    let updatedKeyValue = "";
    //finding the correct key in the object
    if(myLi.firstChild.data.includes("Book:") == true) {    
        //childNodes[0] is the key:value pair in the <li>. The value is getting edited to the userInput
        myLi.childNodes[0].data = "Book: " + myInput.value;
        updatedKeyValue = "book";

     } else if(myLi.firstChild.data.includes("Author:") == true) {    
        myLi.childNodes[0].data = "Author: " + myInput.value;
        updatedKeyValue = "author";

     } else if(myLi.firstChild.data.includes("Genre:") == true) {    
        myLi.childNodes[0].data = "Genre: " + myInput.value;
        updatedKeyValue = "genre";

     } else if(myLi.firstChild.data.includes("Rating:") == true) {    
        myLi.childNodes[0].data = "Rating: " + myInput.value;
        updatedKeyValue = "rating";

     }

    console.log("updatedKeyValue", updatedKeyValue)
    //console.log("myLi", myLi);
    console.log(myLi.firstChild.data.includes("Author"))
    //console.log(myLi.data)
    
    // console.log("myLi.firstChild", myLi.firstChild);
    // console.log("myInput", myInput);
    // console.log("myInput.value", myInput.value);

    //getting the selected book from storage
    let selectedBookInfo = JSON.parse(sessionStorage.getItem("selectedBookStorage"));

    //console.log("selectedBookInfo", selectedBookInfo);
    //console.log("editBtn", myLi.indexOf("editButton"));

    //cycling through booksArr to find mactching storage item to edit
    for (let key in booksArr)
        //console.log("key", key)
        if (booksArr[key].book === selectedBookInfo.book) {
            //need to select other values
            if(updatedKeyValue == "book") {
                booksArr[key].book = myInput.value
                selectedBookInfo.book = myInput.value

            } else if (updatedKeyValue == "author") {
                booksArr[key].author = myInput.value 

            } else if (updatedKeyValue == "genre") {
                booksArr[key].genre = myInput.value 

            } else if (updatedKeyValue == "rating") {
                booksArr[key].rating = myInput.value  

            } else {
                alert("Error: unknown input")
            }
        }

    //setting new values in for storage
    sessionStorage.setItem("booksArray", JSON.stringify(booksArr));
    sessionStorage.setItem("selectedBookStorage", JSON.stringify(selectedBookInfo));

}


const addBook = () => {
    //converts and gets JSON booksArray
    booksArr = JSON.parse(sessionStorage.getItem("booksArray"));
    let newBookObj = new BookObj(
        document.getElementById("book").value,
        document.getElementById("author").value,
        document.getElementById("genre").value,
        document.getElementById("rating").value
    ); 
    
    //newly constructed obj getting pushed to array
    booksArr.push(newBookObj);
    
    //booksArr converted to JSON and sent to storage
    sessionStorage.setItem("booksArray", JSON.stringify(booksArr));
};


let getShowBooks = document.getElementById("showBooks");

//TODO: Show selected book onClick function
function SelectBook(selectedBook){
    //console.log(selectedBook);
    let selectedBookInfo = booksArr[selectedBook];
    sessionStorage.setItem("selectedBookStorage", JSON.stringify(selectedBookInfo));

    //reloads the page on function call
    location.reload();
};

                
//I want to practice DOM manipulation and I really hate times new roman
document.body.style.fontFamily = "arial"