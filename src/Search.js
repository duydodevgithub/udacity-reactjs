import React from "react"
import { Link } from "react-router-dom"
import Book from "./Book"

class Search extends React.Component {
    searchBook = (query) => {
        this.props.searchBook(query);
    }
    render() {
        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/"></Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={(event) => {this.searchBook(event.target.value)}}/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                        <li key={book.id} className="contact-list-item">
                            <Book book={book} updateShelf={this.props.updateShelf} />
                        </li>
                        // console.log(book)
                    ))}
                </ol>
              </div>
            </div>
        )
    }
}

export default Search;