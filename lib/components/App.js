import React from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ArticleList from './ArticleList';

class App extends React.Component {
    state = {
        articles: {},
        authors: {}
    };

    /**
     * componentDidMount() was NOT executed on the server side,
     * but on the client/browser side
     */
    async componentDidMount() {
        const response = await axios.get('/data');
        const api = new DataApi(response.data);

        this.setState(() => ({
            articles: api.getArticles(),
            authors: api.getAuthors()
        }));
    }

    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId],
    };

    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    }
}

export default App;
