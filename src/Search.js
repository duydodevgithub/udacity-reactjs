import React from "react"
import { Link } from "react-router-dom"
import Book from "./Book"

class Search extends React.Component {

    //empty search result
    componentWillMount() {
        this.props.clearSearch();
    }
    searchBook = (query) => {
        // console.log(query);
        this.props.searchBook(query);
    }
    render() {
        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/"></Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={(event) => {this.searchBook(event.target.value.trim())} } />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                    {
                         (
                        this.props.books.map((book) => ( !!book.imageLinks && (
                            <li key={book.id} className="contact-list-item">
                                <Book book={book} updateShelf={this.props.updateShelf} />
                            </li>
                            )
                        ))
                    )
                    // console.log(this.props.books)
                }
                </ol>
              </div>
            </div>
        )
    }
}

export default Search;