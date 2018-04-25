import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/SearchBooks'
import BookList from './components/BookList'

class BooksApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            showSearchPage: false,
        }
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks() {
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    updateShelf = (bookid, shelf) => {
        debugger
        BooksAPI.update(bookid, shelf).then(() => {
            debugger
            this.getAllBooks()
        });
    }

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <SearchPage onCloseSearch={(showSearchPage) => this.setState({showSearchPage})}/>
                ) : (
                    <div>
                        <BookList
                            books={this.state.books}
                            onUpdateShelf={(bookid, shelf) => this.updateShelf(bookid, shelf)}/>
                        <div className="open-search">
                            <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
                        </div>
                    </div>
                )}
            </div>
        );
    }

}

export default BooksApp
