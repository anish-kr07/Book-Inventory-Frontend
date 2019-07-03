import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import BookCard from './components/BookCard';
import Card from './components/Card';
import CardHeader from '@material-ui/core/CardHeader';





const host = "http://localhost:8080"

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {
        book:"",
        // allBooks:{}
      }  
    // this.getBooksForHomepage = this.getBooksForHomepage.bind(this)  
  }
  componentDidMount(){
      axios.get(host + "/getBooksOnSearch").then(data => {
        this.setState({book:data.data})
      })

      axios.get(host + "/getBooks").then(data => {
        this.setState({allBooks:data.data})
      })
  }
  

  render() {
    let bookList = this.state.allBooks && this.state.allBooks.map( book =>{
     return  <BookCard data={book} />
    })
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src="http://books.google.com/books/content?id=twlUtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" className="App-logo" alt="logo" /> */}
          <h2>Book Inventory</h2>
        </div>
        <p>
          {/* {this.state.allBooks && this.state.allBooks[0].title} */}
          {/* <BookCard  title={this.state.allBooks && this.state.allBooks[0].title}/> */}
          {bookList}
          {/* <Card title="The Subtle art of Not Giving A F*ck"/> */}
          {/* <Card >
            <CardHeader
                title="The Subtle art of Not Giving A F*ck"
                subheader="By Anish"
              />
          </Card> */}
        </p>
      </div>
    );
  }
}

export default App;
