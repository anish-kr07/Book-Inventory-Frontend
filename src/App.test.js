import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});
import App from './App'

describe.only('App', () => {

    it('Should render App Component', () => {  
        const wrapper = shallow(<App />)
        expect(wrapper).to.be.ok;
    })

    it('Should render App Component with Edit and Delte Button', () => {  
        const wrapper = shallow(<App />)
        expect(wrapper.find('#addBookButton').length).to.equal(1);
        expect(wrapper.find('#auditLogsButton').length).to.equal(1);
        expect(wrapper.find('#inputSearchButton').length).to.equal(1);
        expect(wrapper.find('#searchButton').length).to.equal(1);

      })
})