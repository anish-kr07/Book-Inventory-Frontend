import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});
import AuditLogs from '../AuditLogs'

describe.only('Audit Logs', () => {
  // before(() => {
  //   var logs = {
  //     operation: "EDIT",
  //     price: 595,
  //     quantity: 65,
  //     timeStamp: "2019-07-26 10:17:46.319",
  //     title: "The Power ofSub Concious Mind",
  //   }
  // })

  it('Should render Audit Logs Component', () => {
    const wrapper = shallow(<AuditLogs/>)
    expect(wrapper).to.be.ok;
  })

  it('Should render table in Audit Logs Component', () => {
    var logs = [{
          operation: "EDIT",
          price: 595,
          quantity: 65,
          timeStamp: "2019-07-26 10:17:46.319",
          title: "The Power ofSub Concious Mind",
        }]
    const wrapper = shallow(<AuditLogs/>)
    wrapper.instance().state['logs']=logs
    expect(wrapper.find("#auditTable").length).to.equal(1)
  })

  it('Should render table in Audit Logs as Heading', () => {
    const wrapper = shallow(<AuditLogs/>)
    const welcome =  <h1>Audit Logs</h1> ;
    expect(wrapper.contains(welcome)).to.equal(true)
  })

  it('Should render table in Audit Logs Component and check for the number of rows', () => {
    var logs = [{
          operation: "EDIT",
          price: 595,
          quantity: 65,
          timeStamp: "2019-07-26 10:17:46.319",
          title: "The Power ofSub Concious Mind",
        }]
    const wrapper = shallow(<AuditLogs/>)
    wrapper.instance().state['logs']=logs
    expect(wrapper.find('tbody').length).to.equal(1)
  })
})