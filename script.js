function Book(){
      this.title = title; // The Hobbit
      this.author = author; // J.R.R Tolkien
      this.pages = pages; // 30 pages
      this.read = read; //already read // not read yet
}

Book.prototype.info = function(){
  return title + ' by ' + author+', '+ pages +', ' + read + '.';
}
Book.prototype.toggleRead = function(){
  read != false ? this.read = true : this.read=false;
}

let myLibrary = [];

function addBookToLibrary() {

}

function removeBookFromLibrary(){

}


const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
