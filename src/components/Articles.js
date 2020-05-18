import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import PropTypes from 'prop-types';

class Articles extends Component {
  render() {
    return this.props.articles.map((article) => (
        <ArticleItem key={article.id} article={article} />     
    ));
  }
}

// PropTypes
Articles.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Articles;