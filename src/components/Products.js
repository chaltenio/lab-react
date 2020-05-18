import React, { Component } from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    return this.props.products.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        markComplete={this.props.markComplete}
        delProduct={this.props.delProduct}
      />
    ));
  }
}

// PropTypes
Products.propTypes = {
    products: PropTypes.array.isRequired
}

export default Products;