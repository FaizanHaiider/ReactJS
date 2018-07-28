import React from 'react';
import {Container, Menu, Dropdown} from 'semantic-ui-react';

const MenuBar = ({products}) => (
    <div>
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item name='Home' />
            <Dropdown item simple text='Your Products'>
                <Dropdown.Menu>
                    {
                        products.map((product) => (
                            <Dropdown.Item key={product.id}>
                                {product.prod_name}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Menu>
    </div>
)

export default MenuBar;

