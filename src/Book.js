import React from "react"
import ShelfChanger from "./ShelfChanger"

const Book = (props) => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>
            <ShelfChanger book={props.book} updateShelf={props.updateShelf} />
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
        
    </div>
)

export default Book;