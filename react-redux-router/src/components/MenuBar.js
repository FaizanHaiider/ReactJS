import React from 'react';
import {NavLink} from 'react-router-dom';
import PropType from 'prop-types';
import {Container, Menu, Dropdown} from 'semantic-ui-react';

function style() {
    return {
        menuBar: {padding: '0.5em'}
    }
}

const MenuBar = ({products}) => {
    const styles = style();

    return (
        <Menu fixed='top' inverted style={styles.menuBar}>
            <Container>
                <Menu.Item as={NavLink} to={`/`} name='Home' />
                <Dropdown item simple text='Your Products'>
                    <Dropdown.Menu>
                        {
                            products.map((product) => (
                                <Dropdown.Item key={product.id} as={NavLink} to={`/${product.id}`} >
                                    {product.name}
                                </Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
    );
}

MenuBar.propTypes = {
    products: PropType.array.isRequired
}

export default MenuBar;

