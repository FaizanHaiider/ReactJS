import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Container } from 'semantic-ui-react';

import {getProducts} from '../actions'
import MenuBar from '../components/MenuBar';
import Home from '../components/Home';
import ItemsTable from '../components/ItemsTable';

function style() {
  return {
      container: {marginTop: '5em'}
  }
}

class App extends Component {

  componentDidMount() {
    const {getProducts} = this.props;
    getProducts();
  }

  render() {
    const {isFetching, products} = this.props.payload;
    const styles = style();
    return(
      <div>
        <MenuBar products={products}/>

        <Container text textAlign='center' style={styles.container}>
          <Home />
          <ItemsTable items={products} type='products'/>
        </Container>
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
  getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);