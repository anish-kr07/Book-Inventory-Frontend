import React, { Component } from 'react';
import Header from '../src/components/Header'
import App from './App'
import BookEdit from '../src/components/BookEdit';
import AuditLogs from './components/AuditLogs';
import SearchBookApi from './components/SearchBookApi';

class Route extends Component {
  constructor(props) {
    super(props);

    this.state = {
     toggle:'home',
     selectedBook:{}
    };

    this.changeToEdit= this.changeToEdit.bind(this)
    this.changeToAdd= this.changeToAdd.bind(this)
    this.changeToLogs = this.changeToLogs.bind(this)
  }

  changeToEdit(book){
    this.setState({selectedBook:book, toggle:'edit'})
  }

  changeToAdd(){
    this.setState({toggle:'add'})
  }

  changeToLogs(){
    this.setState({toggle:'logs'})
  }

  render(){

    switch (this.state.toggle) {
        case 'home':
          return (
            <div>
              <Header />
              <App updateBookInfo={this.changeToEdit}
               changeToAdd ={this.changeToAdd} changeToLogs={this.changeToLogs}/>
            </div>
          )
          break;

        case 'edit':
        return (
            <div>
            <Header />
            <BookEdit  book={this.state.selectedBook}/>
            </div>
        )
        break;  

        case 'add':
            return (
                <div>
                <Header />
                <SearchBookApi changeToEdit={this.changeToEdit} />
                </div>
            )
            break;  
      
        case 'logs':
          return (
              <div>
              <Header />
              <AuditLogs />
              </div>
          )
          break;  
      }  
  }
}

export default Route