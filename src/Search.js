import React from "react"
import { Link } from "react-router-dom"

class Search extends React.Component {
    state = {
        book: ""
    }
    searchTerm = (event) => {
        console.log(event.target.value)
    }
    render() {
        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/"></Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={this.searchTerm}/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
        )
    }
}

export default Search;