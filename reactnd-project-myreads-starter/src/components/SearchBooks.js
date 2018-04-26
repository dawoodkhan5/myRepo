import React, {Component} from 'react'
import * as BooksAPI from './../BooksAPI'
import BookShelf from './BookShelf'

class SearchPage extends Component {
    state = {
        books: [],
    }

    searchBook = (e) => {
        BooksAPI.search(e.target.value).then((books) => {
            this.setState({books})
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.props.onCloseSearch(false)}>Close</a>
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

export default SearchPage;
