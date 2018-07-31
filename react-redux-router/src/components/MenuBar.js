import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Menu, Dropdown} from 'semantic-ui-react';

const MenuBar = ({products}) => (
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item name='Home' />
            <Dropdown item simple text='Your Products'>
                <Dropdown.Menu>
                    {
                        products.map((product) => (
                            <Dropdown.Item key={product.id} as={NavLink} to={`/${product.id}`} >
                                {product.prod_name}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Menu>
)

export default MenuBar;

