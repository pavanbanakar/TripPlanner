function GetAllBooks() {
    var books = [{ title: "Shanataram", author: "Greogory", available: true, category: Category.Fiction }, {
            title: "An Astronounts Guide to Life on Earth", author: "Chris HadField", available: true, category: Category.Biography
        }, { title: "Dark Places", author: "Gillian Flynn", available: true, category: Category.Fiction }];
    return books;
}
function LogFirstAvailable(books) {
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
var titles = GetBookTitleByCategory(Category.Biography);
LogBookTitles(titles);
//# sourceMappingURL=app.js.map