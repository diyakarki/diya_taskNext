import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addValueToCart } from '../actions/addToCart';
import '../index.css';

class Productdetails extends Component {
    render(){
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Add to Cart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://cdn.pixabay.com/photo/2018/03/08/18/27/animals-3209388__340.jpg 1x, https://cdn.pixabay.com/photo/2018/03/08/18/27/animals-3209388__480.jpg 2x" src="https://cdn.pixabay.com/photo/2018/03/08/18/27/animals-3209388__340.jpg" alt="Animals, Charming, Cat, Mammals, Nature" title="Animals, Charming, Cat, Mammals"/>
                        </td>
                        <td>
                            Kitten
                        </td>
                        <td>
                            Rs. 45.00
                        </td>
                        <td>
                            <button className="btn btn-primary" href="prd-desc.html">Description</button>
                        </td>
                        <td>
                            <button className="btn btn-success" onClick={() => this.props.addValueToCart(1)}>Add to Cart</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProbs = (state) => {
    return {
        cartvalue : state.cartvalue
    };
}

const mapDispatchToProbs = (dispatch) => {
    return {
        addValueToCart : (value) => dispatch(addValueToCart(value))
    }
}

export default connect(mapStateToProbs,mapDispatchToProbs)(Productdetails);