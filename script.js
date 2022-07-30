function Book(){
      this.title = title; 
      this.author = author; 
      this.pages = pages; 
      this.read = read; 
}

Book.prototype.toggleRead = function(){
  read != false ? this.read = true : this.read=false;
}

function newBook(title,author,pages,read){ 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

newBook.prototype = Object.create(Book.prototype);



let myLibrary = [];

function addBookToLibrary(newBook, num) {
  myLibrary[num] = newBook
}

function removeBookFromLibrary(idx){
  console.log("Help");
  myLibrary.splice(idx,1);
  const removeDiv = document.querySelector(`[data-num-book="${idx}"]`);
  removeDiv.remove();
  console.log('removed');
}
// ===================================================
// ===================================================

const library = document.querySelector('.library');
const form = document.getElementById('bookForm');
form.addEventListener('submit', bookSubmit);


// ===================================================
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
// const closeButton = document.querySelectorAll("[data-num-book]");
// closeButton.addEventListener("click", removeBookFromLibrary(closeButton.dataset.numBook));


openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});


let title = document.querySelector('#title'); 
let author = document.querySelector('#author');
let numPages = document.querySelector('#numPages');
let readIt = document.querySelectorAll('input[name="readIt"]');

// ===================================================

let i = 0;

function bookSubmit(event) {

  const bookDiv = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookRead = document.createElement("button");
  
  //button
  let closeButton = document.createElement("button");
  let closeImg = document.createElement("img");
  closeButton.classList.add("remove-button");
  closeImg.src = "/red-x-icon.svg";
  closeButton.appendChild(closeImg);
  ///

  let Read;
  for (const radioButton of readIt) {
      if (radioButton.checked) {
          Read = radioButton.value;
          break;
      }
  }
  event.preventDefault();

  
  let formBook = new newBook(title.value, author.value, numPages.value, Read);
  addBookToLibrary(formBook,i);
  bookDiv.dataset.numBook = i;  
  closeButton.dataset.numBook = i;  
  i++;
  
  bookTitle.textContent = formBook.title;
  bookAuthor.textContent = formBook.author;
  bookPages.textContent = formBook.pages;

  bookDiv.classList.add("book");
  bookTitle.classList.add("title");
  bookAuthor.classList.add("author");
  bookPages.classList.add("pages");
  bookRead.classList.add("readYet");

  if (Read == 1) {
    bookRead.classList.add("yes");
  }else{
    bookRead.classList.add("no");
  }

  bookDiv.appendChild(closeButton);
  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  bookDiv.appendChild(bookRead);
  library.appendChild(bookDiv);
  modal.close();

  closeButton.addEventListener("click", () => {
    removeBookFromLibrary(closeButton.dataset.numBook);
  });  

  title.value = '';
  author.value  = '';
  numPages.value = '';
}
