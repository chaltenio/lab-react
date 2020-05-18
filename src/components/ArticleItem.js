import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class ArticleItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.article.bought ? 
            'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.markComplete} /> {''}
                    { this.props.article.description }
                </p>
            </div>
        )
    }
}

// PropTypes
ArticleItem.propTypes = {
    article: PropTypes.object.isRequired
}


export default ArticleItem
