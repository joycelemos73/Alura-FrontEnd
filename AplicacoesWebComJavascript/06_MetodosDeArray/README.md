<h4>:open_book: Alura | Cursos online de Tecnologia<br />
    💻 Developing Web applications with JavaScript.
</h4>

<h2>JavaScript: Array Methods</h2>
<p>
This project demonstrates the usage of various array methods in JavaScript to manipulate and work with data.<br />
The web application showcases the implementation of these methods and provides a practical example of their usage.<br />
  
In this project, I have learned how to utilize the main array methods in JavaScript to perform various operations on arrays. These methods include forEach, map, sorting, and filtering.<br />
By understanding these methods, I gained the ability to manipulate arrays effectively and apply functions to their elements. Additionally, I learned how to manipulate the Document Object Model (DOM) using array methods, allowing for dynamic modification of web page content.<br />
  
• Total duration of the course: 8h.<br />
</p>
<br />

<h1>:books: AluraBooks - Book Catalog :books:</h1>
<p>
AluraBooks is a book catalog application that allows users to explore and discover books available on Alura Books.<br />
Users can browse through a variety of books, view their cover images, authors, and prices.<br />
The application provides filtering options to categorize books into front-end, back-end, and data categories. Users can also filter books to display only the available ones. <br />
Furthermore, AluraBooks offers sorting functionality to arrange books from the cheapest to the most expensive.<br /><br />
</p>

<h3>:rocket: Getting Started</h3>
<p>
To access the AluraBooks application, follow these steps:

    1. Clone the repository to your local machine.
    2. Open the index.html file in your preferred web browser.
    3. The book catalog will be displayed on the page, showcasing all the books.
</p>

<h3>:hammer: Project structure</h3>
<p>
The AluraBooks project has the following structure:

    • app/main.js: This file fetches book data from the AluraBooks API, applies discounts to the prices, and displays the books on the screen.
    • app/metodoFilter.js: This file contains functions to filter books based on category or availability and display the filtered books on the screen, including the total value of available books if applicable.
    • app/metodoForEach.js: This file handles the rendering of books on the screen by iterating through a list and displaying their details, including availability and price.
    • app/metodoMap.js: This file applies a discount to the book prices by using the map method to create a new array of books with updated prices.
    • app/metodoReduce.js: This file calculates the total value of available books by using the `reduce` method to accumulate the prices of the books in the provided array.
    • app/metodoSort.js: This file enables sorting of books by price when the user clicks on a button, using the `sort` method to arrange the books in ascending order based on their prices.
    • imagens/: Contains all the images used in the web page.
    • index.html: The main HTML file that displays the web page interface.
    • requisicao.txt: A text file containing the URL from which the data is fetched to populate the page.
    • style.css: The CSS file that defines the styles for the web page.
</p>

<h3>💻 Usage</h3>
<p>
  Once the AluraBooks - Book Catalog application is loaded, you can perform the following actions:<br />
  
    1. Browse through the books displayed in the catalog.
    2. View the cover image, author, and price information for each book.
    3. Filter books by category (front-end, back-end, data) using the provided filter buttons.
    4. Filter books to display only the available ones using the "Available" button.
    5. Sort the books from the cheapest to the most expensive by clicking the "Sort by Price" button.
</p>



<h3>🌐 API</h3>
<p>
  The AluraBooks application fetches book data from the provided <a href="https://guilhermeonrails.github.io/casadocodigo/livros.json">API endpoint</a>. The API returns a JSON array containing information about each book, including the book title, price, author, cover image URL, availability, and category. The application utilizes this data to populate the book catalog and provide relevant filtering and sorting options.
</p>