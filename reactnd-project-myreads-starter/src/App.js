import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, BrowserRouter, Link} from "react-router-dom";
import SearchBooks from './components/SearchBooks'
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

    updateShelf = (id, shelf) => {
        BooksAPI.update({id}, shelf).then(() => this.getAllBooks());
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">

                    <Route path="/" exact
                           render={() => (
                               <div className="list-books">
                                   <div className="list-books-title">
                                       <h1>MyReads</h1>
                                   </div>
                                   <div>
                                       <BookList
                                           books={this.state.books}
                                           onUpdateShelf={this.updateShelf}
                                       />
                                       <div className="open-search">
                                           <Link to="/search">Add a book</Link>
                                       </div>
                                   </div>
                               </div>
                           )}
                    >
                    </Route>
                    <Route path="/search"
                           render={() => (
                               <SearchBooks
                                   books={this.state.books}
                                   onUpdateShelf={this.updateShelf}
                               />
                           )}
                    >
                    </Route>
                </div>
            </BrowserRouter>
        );
    }

}

export default BooksApp
