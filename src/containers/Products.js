import React, { Component } from 'react';
import ProductList from '../components/ProductList.js';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" variant="light" sticky="top">
                    <Navbar.Brand>
                        <span className="font-weight-bold"> Shopping cart</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to='/cart'>
                            <Navbar.Text>
                                <img alt="" src="https://img.icons8.com/color/40/000000/shopping-cart.png" />
                                <span className="font-weight-bold cart-qty">
                                    {this.props.totalAmount}
                                </span>
                            </Navbar.Text>
                        </Link>
                    </Navbar.Collapse>
                </Navbar>
                <ProductList/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state.products
})

export default connect(mapStateToProps, null)(Products);
