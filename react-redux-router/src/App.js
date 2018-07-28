import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import { getProducts } from './actions';

class App extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    products: PropTypes.array
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getProducts());
  }

  render() {
    console.log(this.props)
    const {isFetching, products} = this.props.state.products;
    const productsLen = isFetching ? 0 : products.length;

    return(
      <div>
        <MenuBar />
        <Home productsLen={productsLen} />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/:id' component={Product} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(App);