import React, {Component} from 'react'
import * as BooksAPI from './../BooksAPI'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

class SearchBooks extends Component {
    state = {
        books: [],
        query: ''
    }

    filterBooks(result_books, shelf_books) {
        const books = result_books.map((result_book) => {
            shelf_books.map((shelf_book) => {
                if (result_book.id === shelf_book.id) {
                    result_book.shelf = shelf_book.shelf
                }
                else {
                    result_book.shelf = 'none'
                }
                return result_book
            })
            return result_book
        })
        return books
    }


    searchBook = (e) => {
        const value = e.target.value
        this.setState({query: value})
        if (value.length > 2) {
            BooksAPI.search(this.state.query).then((books) => {
                if (books.length > 0) {
                    books = this.filterBooks(books, this.props.books)
                }
                this.setState({books})
            });
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.searchBook}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <BookShelf onUpdateShelf={this.props.onUpdateShelf}
                                   books={this.state.books}
                                   title="Search Books Results">
                        </BookShelf>
                    </ol>
                </div>
            </div>
        );
    }

}

export default SearchBooks;
