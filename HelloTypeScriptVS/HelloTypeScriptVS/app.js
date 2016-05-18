function GetAllBooks() {
    var books = [{ id: 1, title: "Shanataram", author: "Greogory", available: true, category: Category.Fiction }, {
            id: 2, title: "An Astronounts Guide to Life on Earth", author: "Chris HadField", available: true, category: Category.Biography
        }, { id: 3, title: "Dark Places", author: "Gillian Flynn", available: true, category: Category.Fiction }];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailableBook = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailableBook = currentBook.title;
            break;
        }
    }
    console.log('Total Number of Books:  ' + numberOfBooks);
    console.log('First Available Book:  ' + firstAvailableBook);
}
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Fiction"] = 1] = "Fiction";
    Category[Category["Children"] = 2] = "Children";
    Category[Category["Poetry"] = 3] = "Poetry";
})(Category || (Category = {}));
;
function GetBookTitleByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = Category.Fiction; }
    console.log('Getting Books for the category: ' + Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var book = allBooks_1[_i];
        if (book.category == categoryFilter) {
            filteredTitles.push(book.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var books = GetAllBooks();
    return books.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomer(name, age, city) {
    console.log('Customer Name: ' + name);
    if (age)
        console.log('Customer Age: ' + age);
    if (city)
        console.log('Customer City: ' + city);
}
function CheckOutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
        ;
    }
    return booksCheckedOut;
}
//*****************************************
var titles = CheckOutBooks('Chet', 1, 3);
titles.forEach(function (title) { return console.log('Checked out Book: ' + title); });
//CreateCustomer('Danielle', 28, 'Vaughan');
//const titles = GetBookTitleByCategory(Category.Fiction);
//titles.forEach((val, index, arr) => console.log(val));
//console.log(GetBookByID(1).author);
//LogFirstAvailable();
//# sourceMappingURL=app.js.map