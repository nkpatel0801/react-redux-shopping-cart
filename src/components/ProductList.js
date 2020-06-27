// @flow 
import { Card, ListGroup, ListGroupItem, Button,Spinner } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToCart, getProducts } from '../actions/products';

class ProductList extends Component {


    componentDidMount() {
        this.props.getProducts();
    }

    addToCart = (item) => {
        this.props.addProductToCart(item);
    }

    render() {
        const { list } = this.props
        return (
            <div className="card-container">
                <div className="row">
                    <div className="col d-flex align-content-start flex-wrap">
                        {
                          list.length ?  list.map((item, i) => (
                                <Card key={i} className="card-width">
                                    <Card.Img variant="top" className="prod-image" src={item.filename} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Price : {item.price}</ListGroupItem>
                                        <ListGroupItem>Ratings : {item.rating}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link className="cp" onClick={() => this.addToCart(item)}>
                                            <Button variant="outline-secondary">
                                                <img alt="" src="https://img.icons8.com/color/25/000000/shopping-cart.png" /> Add to cart
                                            </Button>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                                )) : <Spinner animation="border" />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.products
})

const mapDispatchToProps = {
    addProductToCart,
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);