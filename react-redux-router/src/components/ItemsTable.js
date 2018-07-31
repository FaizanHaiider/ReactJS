import React from 'react';
import {Link} from 'react-router-dom';
import PropType from 'prop-types';
import {Table, Icon, Container} from 'semantic-ui-react';

function style() {
    return {
        itemsTable: {marginTop: '1em'}
    }
}

const productTable = ['Product ID', 'Product Name', 'Last Updated', 'Edit'];
const travelTable = ['Date (time)', 'Location'];

const ItemsTable = ({items, type}) => {
    const styles = style();
    return (
        <Container style={styles.itemsTable}>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {
                            type === 'products' ? 
                            productTable.map((cellValue, index) => (
                                <Table.HeaderCell key={index}>{cellValue}</Table.HeaderCell>
                            ))
                            :
                            travelTable.map((cellValue, index) => (
                                <Table.HeaderCell key={index}>{cellValue}</Table.HeaderCell>
                            ))
                        }
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        type === 'products' ?
                        items.map(product => (
                            <Table.Row key={product.id}>
                                <Table.Cell>{product.id}</Table.Cell>
                                <Table.Cell>{product.name}</Table.Cell>
                                <Table.Cell>{product.travelPath[0].datetime}</Table.Cell>
                                <Table.Cell><Link to={`/${product.id}`}><Icon name='pencil'/></Link></Table.Cell>
                            </Table.Row>
                        ))
                        : 
                        items.map((path, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{path.datetime}</Table.Cell>
                                <Table.Cell>({path.latitude}, {path.longitude})</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </Container>
    );
}

Table.protoTypes = {
    items: PropType.array.isRequired,
    type: PropType.string.isRequired
}

export default ItemsTable;
