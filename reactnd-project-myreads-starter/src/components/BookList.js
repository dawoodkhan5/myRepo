import React, {Component} from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {
    shelf = [
        {
            name: `currentlyReading`,
            title: `Currently Reading`
        },
        {
            name: `wantToRead`,
            title: `Want to Read`
        },
        {
            name: `read`,
            title: `Read`
        },
    ]

    render() {
        const shelfs = this.shelf
        const books = this.props.books
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        { shelfs.map((shelf) => (
                            <BookShelf
                                title={shelf.title}
                                books={books.filter((book) => book.shelf === shelf.name)}
                                onUpdateShelf={this.props.onUpdateShelf}
                            />
                        )) }
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList;
