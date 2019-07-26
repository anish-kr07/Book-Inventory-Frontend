import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});
import SearchBookApi from "../SearchBookApi"

describe.only('Search Book ', () => {

    it('Should render Search Book Component', () => {  
        const wrapper = shallow(<SearchBookApi />)
        expect(wrapper).to.be.ok;
      })
    it('Should render table in Search Book with Heading as Add Book', () => {
      const wrapper = shallow(<SearchBookApi/>)
      const welcome =  <h1>Add Book </h1>
      expect(wrapper.contains(welcome)).to.equal(true)
    })

    it('Should render Search Book with Search input Field and Search Button Component', () => {  
      const wrapper = shallow(<SearchBookApi />)
      expect(wrapper.find('#inputSearchButton').length).to.equal(1);
      expect(wrapper.find('#searchButton').length).to.equal(1);
    })
})