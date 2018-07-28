import React from 'react';
import PropTypes from 'prop-types';

const Home = ({productsLen}) => (
    <div>
        <h1> Home </h1>
        {
            productsLen === 0 ? 
            <p> Loading... </p> : 
            <p> {productsLen} </p>   
        }
    </div>
)

Home.propTypes = {
    productsLen: PropTypes.number.isRequired
}

export default Home;
