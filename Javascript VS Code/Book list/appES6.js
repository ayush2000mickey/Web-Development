class Book {
    constructor(title , author , isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
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

    showAlert(message , className) {
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

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearsFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//Local Storage class
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book) {
            const ui = new UI;

            //Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books' , JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function(book , index) {
            if(book.isbn === isbn) {
                books.splice(index , 1);
            }
        });

        localStorage.setItem('books' , JSON.stringify(books));
    }
}

//DOM Load Event
document.addEventListener('DOMContentLoaded' , Store.displayBooks);


//Event Listener to add book
document.getElementById('book-form').addEventListener('submit' , 
function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    const book = new Book(title , author , isbn);

    //Instantiate UI
    const ui = new UI();

    console.log(ui);

    //Validate
    if(title === '' || author === '' || isbn === '') {
        //Error alert
        ui.showAlert('Please fill all fields' , 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);

        //Add to Local Storage
        Store.addBook(book);

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

    //Remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('Book Deleted' , 'success' );

    e.preventDefault();
})