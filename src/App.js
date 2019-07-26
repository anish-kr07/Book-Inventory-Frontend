import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import BookCard from './components/BookCard';
import CardHeader from '@material-ui/core/CardHeader';
import {Navbar,FormControl,Form,Row,Col,Button} from 'react-bootstrap'


const host = "http://localhost:8080"

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {
        book:"",
      }  
  }
  componentWillMount(){
      axios.get(host + "/getBooks").then(data => {
        this.setState({allBooks:data.data})
      })
  }

  updateBookInfo=(book)=>{
    this.props.updateBookInfo(book)
  }

  changeToLogs=()=>{
    this.props.changeToLogs()
  }

  changeToAdd=()=>{
    this.props.changeToAdd();
  }

  searchBook=()=>{
    axios.get("http://localhost:8080/books/search/"+this.inputSearch.value)
    .then(rsp => {
        this.setState({allBooks:rsp.data})
    })
  }
  

  render() {
    let bookList = this.state.allBooks && this.state.allBooks.map( book =>{
     return  ( <Col sm={3}> <BookCard data={book} updateBookInfo={this.updateBookInfo} view="EditBook"/></Col>)
    })
    return (
        [<div>
            <Row style={{textAlign: "right"}}>
            <Col sm={6}>
                  <Button
                    id="addBookButton" 
                    variant="primary" style={{margin:'1em',textAlign:'right'}}  onClick={()=>this.changeToAdd()}>
                    Add Book
                  </Button>
              </Col>
              <Col sm={2}>
                    <Button
                        id="auditLogsButton" 
                        variant="primary" style={{margin:'1em',textAlign:'right'}}  onClick={()=>this.changeToLogs()}>
                        Audit Logs
                    </Button>
                </Col>
              <Col sm={4}>
                <Form inline style={{margin:'1em'}} >
                  <FormControl  
                    id="inputSearchButton"
                    type="text" 
                    ref={(n) => {this.inputSearch = n}}
                    placeholder="Search"
                    className="mr-sm-2" />
                  <Button 
                    id="searchButton" 
                    variant="outline-success" 
                    onClick={()=>this.searchBook()}
                    >
                      Search
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>,
        <Row>
          {bookList}
        </Row>]
    );
  }
}

export default App;
