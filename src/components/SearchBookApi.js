import React, { Component } from 'react';
import axios from 'axios';
import {Image,FormControl,Row,Col,Form,Card,Button,ListGroup,Modal} from 'react-bootstrap'
import BookCard from './BookCard';


export default class SearchBookApi extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        bookList: [],
        view:"AddBook"
      };

    }

    updateBookInfo =(book)=>{
      this.props.changeToEdit(book)

    }

    changeView =()=>{
        this.setState({view:"EditBook"})
    }

    getData= ()=>{
        axios.get("http://localhost:8080/books/api/"+this.input.value)
        .then(rsp => {
            this.setState({bookList:rsp.data[0].items})
        })
    }
  
    render() {
        let bookDiv =this.state.bookList.map(book =>{
            return ( <Col sm={3} > <BookCard data={book.volumeInfo} updateBookInfo={this.updateBookInfo}  view="AddBook" /> </Col>)
          })

      return (
        <div>
            <Row>    
            <Col  className="tableHeader">  <h1>Add Book </h1> </Col>  
            </Row>

            <Row>
                  <Col >
                    <Form inline style={{margin:'1em'}} >
                    <FormControl  type="text" 
                             ref={(n) => {this.input = n}}
                            placeholder="Search"
                            className="mr-sm-2" />
                 
                      <Button variant="primary"  onClick={this.getData}>
                        search
                      </Button>
                      </Form> 
                    </Col>                         
            </Row>          
            <Row>
            {bookDiv}
            </Row>
           
        </div>
            
      );
    }
  }
 