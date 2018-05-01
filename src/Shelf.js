import React from "react"
import Book from "./Book"

const Shelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {props.books.map((book) => (props.shelf === book.shelf && (
                <li key={book.id} className="contact-list-item">
                    <Book book={book} updateShelf={props.updateShelf}/>
                </li>
            )))}
            </ol>
        </div>
    </div>
)

export default Shelf;