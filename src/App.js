import React, { Component } from 'react';
import Header from './components/layout/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

import './App.css';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        description: 'Product 1',
        bought: false
      },
      {
        id: 2,
        description: 'Product 2',
        bought: true
      },
      {
        id: 3,
        description: 'Product 3',
        bought: false
      },        
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ products: this.state.products.map(product => {
      if(product.id === id) {
        product.bought = !product.bought
      }
      return product;
    }) });
  }

  // Delete Product
  delProduct = (id) => {
    this.setState({ products: [...this.state.products.filter(product => product.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddProduct />
          <Products products={this.state.products} markComplete={this.markComplete} delProduct={this.delProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
