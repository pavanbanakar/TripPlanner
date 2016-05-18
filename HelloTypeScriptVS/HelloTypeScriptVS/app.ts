function GetAllBooks() {
    let books = [{ id: 1, title: "Shanataram", author: "Greogory", available: true, category: Category.Fiction }, {
        id: 2, title: "An Astronounts Guide to Life on Earth", author: "Chris HadField", available: true, category: Category.Biography
    }, { id: 3, title: "Dark Places", author: "Gillian Flynn", available: true, category: Category.Fiction }];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
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

function GetBookTitleByCategory(categoryFilter: Category =  Category.Fiction): Array<string> {
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

function LogBookTitles(titles: string[]): void {
    for (let title of titles)
        console.log(title);
}

function GetBookByID(id: number) {
    let books = GetAllBooks();
    return books.filter(book => book.id === id)[0];
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Customer Name: ' + name);
    if (age)
        console.log('Customer Age: ' + age);

    if (city)
        console.log('Customer City: ' + city);
}

function CheckOutBooks(customer: string, ...bookIDs: number[]): string[] {

    let booksCheckedOut: string[] = [];

    for (let id of bookIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        };

    }
    return booksCheckedOut;
}

//*****************************************

var titles = CheckOutBooks('Chet', 1,3);

titles.forEach(title => console.log('Checked out Book: '+ title));

//CreateCustomer('Danielle', 28, 'Vaughan');

//const titles = GetBookTitleByCategory(Category.Fiction);
//titles.forEach((val, index, arr) => console.log(val));

//console.log(GetBookByID(1).author);

//LogFirstAvailable();









