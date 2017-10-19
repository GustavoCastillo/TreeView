import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Tree from '../lib/treeView';
import ObjectTree from '../lib/object';

describe('<Tree/>', function() {
    it('contains an <Tree/> component', function() {
        const wrapper = shallow(<Tree data={ObjectTree}/>);
        expect(wrapper.find(Tree)).to.have.length(1);
    });
    it('should have ul li Treeview', function() {
        const wrapper = shallow(<Tree data={ObjectTree}/>);
        expect(wrapper.find('ul > li')).to.have.length(2);
    });
    it('should have onClick', function() {
        const wrapper = shallow(<Tree data={ObjectTree}/>);
        expect(wrapper.props().onClick).to.be.defined;
    });


});
