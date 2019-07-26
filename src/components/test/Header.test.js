import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});
import Header from '../Header'

describe.only('Header', () => {

    it('Should render Header Component', () => {  
        const wrapper = shallow(<Header />)
        expect(wrapper).to.be.ok;
    })

    it('Should render Home Button', () => {  
    const wrapper = shallow(<Header />)
    expect(wrapper.find('#homeButton').length).to.equal(1);
    })

    it('Should render Home Component with label Book Inventory', () => {  
    const wrapper = shallow(<Header />)
    expect(wrapper.find("label",'Book Inventory').length).to.equal(1);
    })
})