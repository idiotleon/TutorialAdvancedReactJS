import React from 'react';
import ArticleList from '../components/ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

    it('renders correctly', () => {
        const element = renderer.create(
            <div>Hello</div>
        ).toJSON();

        console.log(element);
    });
});