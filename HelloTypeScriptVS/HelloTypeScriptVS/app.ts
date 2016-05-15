function GetAllBooks() {
    let books = [{ title: "Shanataram", author: "Greogory", available: true, category: Category.Fiction }, {
        title: "An Astronounts Guide to Life on Earth", author: "Chris HadField", available: true, category: Category.Biography
    }, { title: "Dark Places", author: "Gillian Flynn", available: true, category: Category.Fiction }];

    return books;
}

function LogFirstAvailable(books): void {
    let numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';
    for (let currentBook of books) {

        if (currentBook.available) {
            firstAvailableBook = currentBook.title;
            break;
        }
    }
    console.log('Total Number of Books:  ' + numberOfBooks);
    console.log('First Available Book:  ' + firstAvailableBook);
}

enum Category { Biography, Fiction, Children, Poetry };

function GetBookTitleByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting Books for the category: ' + Category[categoryFilter]);
    let allBooks = GetAllBooks();
    const filteredTitles: string[] = [];
    for (let book of allBooks) {
        if (book.category == categoryFilter) {
            filteredTitles.push(book.title);
        }
    }
    return filteredTitles;
}

function LogBookTitles(titles: string[]):void {
    for (let title of titles)
        console.log(title);
}
const titles = GetBookTitleByCategory(Category.Biography);
LogBookTitles(titles);
