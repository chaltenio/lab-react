import React, { Component } from 'react'

export class AddProduct extends Component {
    render() {
        return (
          <form style={{ display: 'flex' }}>
            <input
              type="text"
              name="Description"
              style={{ flex: '10', padding: '5px' }}
              placeholder="Add Product ..."
            />

            <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
          </form>
        );
    }
}

export default AddProduct
