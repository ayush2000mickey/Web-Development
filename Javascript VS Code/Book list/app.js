//Book Constructor
function Book(title , author , isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Contructor 
function UI() {}


UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');

    //create tr Element
    const row = document.createElement('tr');

    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>
    `;

    list.appendChild(row);
}

UI.prototype.showAlert = function(message , className) {
    //create div
    const div = document.createElement('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector('.container');
    //Get form
    const form = document.getElementById('book-form');

    //Insert Alert
    container.insertBefore(div , form);

    //Timeout div after 3sec
    setTimeout(function() {
        document.querySelector('.alert').remove();
    } , 3000);
}

UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearsFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listener to add book
document.getElementById('book-form').addEventListener('submit' , 
function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    const book = new Book(title , author , isbn);

    //Instantiate UI
    const ui = new UI();


    //Validate
    if(title === '' || author === '' || isbn === '') {
        //Error alert
        ui.showAlert('Please fill all fields' , 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);

        ui.showAlert('Book Added Successfully' , 'success');
    }
    
    
    //clears input fields
    ui.clearsFields();

    e.preventDefault();
});

//Event listener to delete book
document.getElementById('book-list').addEventListener('click' , function(e) {
    //Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book Deleted' , 'success' );

    e.preventDefault();
})