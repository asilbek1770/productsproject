
import React, {Component} from 'react';
import {DataContext} from "../Products/Contexts/ProductContext";
import {Link} from "react-router-dom";


class Cart extends Component {
    static  contextType = DataContext;
    state = {
        cart: [],
    }
    componentDidMount() {
        this.setState({cart: this.context.cart})
        this.context.getTotal()
    }


    render() {
        const {cart} = this.state;
        const {replace} = this.props.history
        if(cart.length === 0){
            return (
                    <section>
                        <h4 style={{textAlign: "center"}}>Nothing product</h4>
                    </section>
                )
        }else{
            const { decrement,increment,removeProduct,total } = this.context
            return  (
                <section>
                    <div className="container p-4">
                        <h4 className="text-center">Cart</h4>
                        <Link to="/payment">
                            <button style={{right: 380, top: 140}}
                                    className="position-fixed btn btn-light btn-sm font-weight-bold">payment</button>
                        </Link>
                        <h4 style={{right: 200, top: 140}} className="position-fixed">Total: <span style={{color: "crimson"}}>{total} $</span> </h4>
                        {cart.map(p =>
                            <div className="row p-4" key={p.id}>
                                <div className="col-md-6 ">
                                    <img src={p.img} alt="" width={500} height={300}/>
                                </div>
                                <div className="col-md-6 pt-5">
                                    <p>product type:  <span className="ml-4" style={{color: "crimson"}}>{p.title}</span></p>
                                    <p>description:  <span className="ml-4" style={{color: "crimson"}}>{p.description}</span> </p>
                                    <p>product price:   <span className="ml-4" style={{color: "crimson"}}>{p.count * p.price } $</span></p>

                                    <p>
                                        <button className={`btn btn-danger btn-sm ${p.count === 1 ? "disabled" : ""}`}
                                                onClick={() => decrement(p.id)}>-</button>
                                        <span className="mx-4">{p.count}</span>
                                        <button className="btn btn-success btn-sm" onClick={() => increment(p.id)}>+</button>
                                    </p>

                                    <button className="btn btn-light btn-sm" onClick={() => replace("/products") }> backToProducts</button>
                                </div>
                                <button className="position-absolute btn btn-danger btn-sm" style={{right: 200}}
                                    onClick={() => removeProduct(p.id)}
                                >remove</button>
                            </div>
                        )}
                    </div>


                </section>
            );

        }
    }

}

export default Cart;
