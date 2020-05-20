import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import About from './components/pages/About';
//import uuid from 'react-uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    products: []
    /*
    products: [
      {
        id: uuid(),
        description: 'Product 1',
        bought: false,
      },
      {
        id: uuid(),
        description: 'Product 2',
        bought: true,
      },
      {
        id: uuid(),
        description: 'Product 3',
        bought: false,
      },
    ],
    */
  }

  componentDidMount() {
    axios
      //.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .get('http:///192.168.1.70:5000/api/v1/auth/returnProducts')
      .then(res => this.setState({ products: res.data }))
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === id) {
          product.bought = !product.bought;
        }
        return product;
      }),
    });
  };

  // Delete Product
  delProduct = (id) => {
    axios.delete(`http:///192.168.1.70:5000/api/v1/auth/returnProducts/${id}`)
    .then(res => this.setState({ products: [...this.state.products.filter(product => product.id !== id)]}));
  }

  // Add Product
  addProduct = (description) => {
    /*
    const newProduct = {
      id: uuid(),
      description: description,
      bought: false,
    };
    */
    axios
      .post('http:///192.168.1.70:5000/api/v1/auth/returnProducts', {
        description,
        bought: false,
      })
      .then((res) =>
        this.setState({ products: [...this.state.products, res.data] })
      );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddProduct addProduct={this.addProduct} />
                  <Products
                    products={this.state.products}
                    markComplete={this.markComplete}
                    delProduct={this.delProduct}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
