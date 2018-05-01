import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import Search from "./Search"
import Shelf from "./Shelf"
import  { Link } from "react-router-dom"


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    search: []
  }

  //Ajax request right after component mounted
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({books: books}))
      console.log(this.state.books);
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={()=>(<Search />)}/>

        <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Shelf shelfName="Currently Reading" shelf="currentlyReading" books={this.state.books} updateShelf={this.updateShelf} />
                <Shelf shelfName="Want to Read" shelf="wantToRead" books={this.state.books} updateShelf={this.updateShelf} />
                <Shelf shelfName="Read" shelf="read" books={this.state.books} updateShelf={this.updateShelf} />
              </div>

              <div className="open-search">
                  <Link to="/search">Add a book</Link>
              </div>
            </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
