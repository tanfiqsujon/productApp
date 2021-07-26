import logo from "./logo.svg";
import React, {Component} from 'react';
import "./App.css";
import Products from "./product";
import ProductDetails from "./productDetails";

class App extends Component {
  state = {
    products: [
      { name: `HM90`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$5`, category: `Headphone` },
      { name: `HM10`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$7`, category: `Headphone` },
      
    ],
    currentProduct: null,
    loading: true,
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  selectProduct = (details)=>{
    this.setState({...this.state, currentProduct:details})
  };

  backToList=()=>{
    this.setState({...this.state, currentProduct:null})
  };
  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    return (
      <div style={{
        padding:'50px'
      }}>
        {!this.state.currentProduct && <Products products={this.state.products} selectProduct={this.selectProduct}/>}
        {this.state.currentProduct && <ProductDetails currentProduct={this.state.currentProduct} backToList={this.backToList}/>}
      </div>
    );
  }
}

export default App;
