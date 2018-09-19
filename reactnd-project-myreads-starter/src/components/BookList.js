import React, {Component} from 'react'
import BookShelf from './BookShelf'


class BookList extends Component {
    shelves = [
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
        const shelves  = this.shelves
        const {books} = this.props
        return (

            <div className="list-books-content">
                <div>
                    { shelves.map((shelf) => (
                        <BookShelf
                            title={shelf.title}
                            books={books.filter((book) => book.shelf === shelf.name)}
                            onUpdateShelf={this.props.onUpdateShelf}
                        />
                    )) }
                </div>
            </div>

        )
    }
}

export default BookList;
