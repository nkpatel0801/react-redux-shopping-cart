import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
    removeProductFromCart,
    increaseQuantity,
    decreaseQuantity
} from '../actions/products';
import { Link } from 'react-router-dom';

class Cart extends Component {

    removeProduct = (title) => {
        this.props.removeProductFromCart(title);
    }

    increaseQuantity = (title) => {
        this.props.increaseQuantity(title);
    }

    decreaseQuantity = (title) => {
        this.props.decreaseQuantity(title);
    }

    render() {
        const { cartProducts, totalPrice } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className=" mt-5 mb-4">
                            <h4><Link to="/">
                            <img alt="" className="mr-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA7UlEQVRIieWVzW0CMRCFv1nRARe8FMMBOmEbCIqCED9KAgRxSFJADIWAV6IaONECwyFIOWXXNotQlHcef0/20zzDv1Zjs26VzSSx8Kazb0ly2hlnB0VztRh46uxS4QlAkHqlBmZrZ1zgKnwe2t3HonkJhYsw/IFnvbIz3hmY3E5D4eB5g9StXkHHoXAvg2vgpQapsy/AJBYOBRmk26/na+GFBlXp5k9035CrMPHeZJPbqSijUBPvkA/tbKzKHECUB5PbD59zQV0E4X0UbADfdc2lUUHe953fGzVqD/adrC+wAFD0GMPwks+X+fd1BmiqbBYJWPm8AAAAAElFTkSuQmCC"/>
                            </Link>Products in cart</h4></div>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Cost</th>
                                    <th>⬆⬇</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartProducts.length ? cartProducts.map((item, i) => (<tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.cost.toFixed(2)}</td>
                                        <td>
                                            <Button variant="outline-success mr-2" onClick={() => this.increaseQuantity(item.title)}>+</Button>
                                            <Button disabled={item.qty === 0} variant="outline-danger" onClick={() => this.decreaseQuantity(item.title)}>–</Button>
                                        </td>
                                        <td>
                                            <Button variant="outline-dark" onClick={() => this.removeProduct(item.title)}>Remove</Button>
                                        </td>
                                    </tr>)) : <tr colSpan="6" className="text-center">
                                            <td>No products in cart.</td>
                                        </tr>
                                }
                                <tr>
                                    <td className="text-right font-weight-bold" colSpan="4">Total :</td>
                                    <td colSpan="7">{totalPrice.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </Table>
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
    removeProductFromCart,
    increaseQuantity,
    decreaseQuantity
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
