import React, { Component } from 'react';
// import logo from './logo.svg';
// import '../App.css';
import axios from 'axios';
import {Table,Row,Col, Container} from 'react-bootstrap'

export default class AuditLogs extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      logs: []
    };
  }

  componentWillMount(){
    axios.get("http://localhost:8080/books/auditLog")
    .then(rsp => {
        var logs = rsp.data.map(log => JSON.parse(log))
        this.setState({logs:logs})
    })
  }

  render() {
      const tableBody= this.state.logs.map((log,key) =>{
        return  <tr>
                <td>{key+1}</td>
                <td>{log.operation}</td>
                <td>{log.title}</td>
                <td>{log.price}</td>
                <td>{log.quantity}</td>
                </tr>
      })
    return (
        <div >
        <Container>
          <Row>
                <Col  className="tableHeader">  <h1>Audit Logs</h1> </Col>
              </Row>
              <Table 
                id="auditTable"
                striped bordered hover>
              <thead>
                  <tr>
                  <th>#</th>
                  <th>Operation</th>
                  <th>Title</th>
                  <th>Price </th>
                  <th>Quantity</th>
                  </tr>
              </thead>
              <tbody>
                  {tableBody}
              </tbody>
              </Table>
        </Container>
       
    </div>

    );
  }
}
