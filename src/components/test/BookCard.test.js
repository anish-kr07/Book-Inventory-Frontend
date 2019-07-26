
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai'
import BookCard from '../BookCard';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});

describe.only('Book', () => {
  const book=  {
                  "id": "5d395f5e41b12613fe1ec992",
                  "title": "The Power of Sub Concious Mind",
                  "authors": [
                      "Joseph Murphy",
                      "Anish Kumar"
                  ],
                  "imageLinks": {
                      "smallThumbnail": "http://books.google.com/books/content?id=twlUtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                      "thumbnail": "http://books.google.com/books/content?id=twlUtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                  },
                  "description": "The Power of Sub Concious Mind is great book to read",
                   "price": 595,
                  "quantity": 60
              }

    it('Should render BookCard Component', () => {  
      const wrapper = shallow(<BookCard data={book} view="EditBook"/>)
      expect(wrapper).to.be.ok;
    })

    it('Should get Title form the Book', () => {  
      const wrapper = shallow(<BookCard data={book} view="EditBook"/>)
      expect(wrapper.find('#cardTitle').length).to.equal(1);
      })

    it('Should get Description form the Book', () => {  
      const wrapper = shallow(<BookCard data={book} view="EditBook"/>)
      expect(wrapper.text()).to.include("The Power of Sub Concious Mind is great book to read");
    })

    it('Should get Card media form the Book', () => {  
      const wrapper = shallow(<BookCard data={book} view="EditBook"/>)
      expect(wrapper.find('.cardMedia').length).to.equal(1);
      })

    it('Should get Card Description form the Book', () => {  
      const wrapper = shallow(<BookCard data={book} view="EditBook"/>)
      expect(wrapper.find('.cardDescription').length).to.equal(1);
      })

    it('Should get Book Price form the Book', () => {  
      const wrapper = shallow(<BookCard data={book} view="EditBook"/>)
      expect(wrapper.find('#book-price').length).to.equal(1);
      })

    it('Should get Book quantity form the Book', () => {  
      const wrapper = shallow(<BookCard data={book} view="EditBook"/>)
      expect(wrapper.find('#book-quantity').length).to.equal(1);
      })

    it('Should render Edit View with Edit and Delte Button', () => {  
      const wrapper = shallow(<BookCard data={book} view="EditBook"/>)
      expect(wrapper.find('#editButton').length).to.equal(1);
      expect(wrapper.find('#deleteButton').length).to.equal(1);
      expect(wrapper.find('#addStoreButton').length).to.equal(0);
    })

    it('Should render edit View with Add to Store Button', () => {  
      const wrapper = shallow(<BookCard data={book} view="AddStore"/>)
      expect(wrapper.find('#editButton').length).to.equal(0);
      expect(wrapper.find('#deleteButton').length).to.equal(0);
      expect(wrapper.find('#addtoStore').length).to.equal(1);
    })
})