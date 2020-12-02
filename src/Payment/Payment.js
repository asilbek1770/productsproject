import React, {Component} from 'react';

class Payment extends Component {
    render() {
    const { replace } = this.props.history
        return (
            <section>
                <h4 className="text-center">Payment</h4>
                <button className="btn btn-light ml-5" onClick={() => replace("/products")}>backToProducts</button>
                <button className="btn btn-light mx-5" onClick={() => replace("/cart")}>backToCart</button>
            </section>
        );
    }
}

export default Payment;