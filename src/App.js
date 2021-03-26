import React, { Component } from 'react';
import Products from './components/Products';
import Product from './data.json'
class  App extends Component  {

  constructor(){
    super();
    this.state = {
      products: Product.products,
      size: "",
      sort: ""
    }
  }

  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/"> React Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Products products={this.state.products}/>
            </div>
            <div className='sidebar'>
              Cart Items
            </div>
          </div>
        </main>
        <footer>
          All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
