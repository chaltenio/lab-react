import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export class AddProduct extends Component {
    state = {
        description: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state.description);
        this.setState({ description: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
          <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input
              type="text"
              name="description"
              style={{ flex: '10', padding: '5px' }}
              placeholder="Add Product ..."
              value={this.state.description}
              onChange={this.onChange}
            />

            <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
          </form>
        );
    }
}

// PropTypes
AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
}


export default AddProduct
