import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import {connect} from 'react-redux';
import {Container, Menu, Dropdown} from 'semantic-ui-react';

const MenuBar = (props) => (
    <Menu inverted>
        <Container>
            <Menu.Item as={Link} name='Home' to='/' />
            <Dropdown item simple text='Your Products' >
                <Dropdown.Menu>
                    {console.log(props.products)}
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Menu>
)

const mapStateToProps = ({products}) => {
    products: products.products
}

const mapDispatchToProps = dispatch => bindActionCreators({
    onChangePage: () => push(`/`)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuBar);

