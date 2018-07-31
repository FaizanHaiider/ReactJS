import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MenuBar from '../components/MenuBar';
import Home from '../components/Home';
import { getProducts } from '../actions';

class App extends Component {
  
  componentDidMount() {
    const {getProducts} = this.props;
    getProducts();
  }

  render() {
    const {isFetching, products} = this.props.payload;
    const productsLen = isFetching ? 0 : products.length;

    return(
      <div>
        <MenuBar products={products}/>
        <Home productsLen={productsLen} />
      </div>
    );
  }
}

App.propTypes = {
  getProducts: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  products: PropTypes.array
}

const mapStateToProps = state => {
  return ({
    payload: state.products
  })
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);