import React from "react";

class ShelfChanger extends React.Component {
    state = {
        shelf: this.props.book.shelf
    }
    changeShelf = (event) => {
        // console.log(event.target.value);
        // console.log(this.props.book)
        this.props.updateShelf(this.props.book, event.target.value);
        this.setState({shelf: event.target.value})
    }
    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={this.changeShelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger;