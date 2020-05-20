import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class ProductItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.product.bought ? 
            'line-through' : 'none'
        }
    }


    render() {
        const { id, description } = this.props.product;

        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
                    { description }
                    <button onClick={this.props.delProduct.bind(this, id)} style={btnStyle}>x</button>                    
                </p>
            </div>
        )
    }
}

// PropTypes
ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delProduct: PropTypes.func.isRequired, 
}




const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default ProductItem
