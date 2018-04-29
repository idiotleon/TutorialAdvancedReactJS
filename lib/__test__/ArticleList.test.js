import React from 'react';
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';

import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme Adapter
Enzyme.configure({adapter: new Adapter()});

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' }
        }
    };

    Article.propTypes = {};

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList
                {...testProps}
            />
        );
        // console.log(wrapper.getElement().props.children);

        expect(wrapper.find('Article').length).toBe(2);

        expect(wrapper).toMatchSnapshot();
    });

});