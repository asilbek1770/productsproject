import {Link} from "react-router-dom";

import React, {Component} from 'react';

class ProductFiltered extends Component {
        state = {
            selectedId: 0
        }
    render() {
        const {addCart,filter,deleteProductFromProducts,user} = this.props
        return (
            <div className="col-10 ">

                {user?.isAdmin &&
                    <Link to="/addNewProduct">
                            <button className="ml-4 btn btn-sm btn-primary  "
                            >add new product</button>
                    </Link>
                }

                <div className="d-flex flex-wrap">

                    {filter.map(p =>
                        <div className="col" key={p.id} >
                            <div  className="card my-2 product" style={{width: 200}}>
                                <img className="card-img-top position-relative"
                                     src={p.img}
                                     style={{cursor: "pointer",height:150}}
                                     alt="Card image cap" />
                                <div className="card-body">
                                    <Link to={`/products/${p.id}`}  >
                                        <button
                                            className="btn btn-light btn-sm position-absolute w-100"
                                            style={{top: 140, left:0}}
                                        >details</button>
                                    </Link>
                                    {user?.isAdmin &&

                                    <button className="btn  btn-sm position-absolute btn-outline-danger"
                                            style={{top: 0, right: 0}}
                                            onClick={() => deleteProductFromProducts(p.id)}
                                    >delete</button>
                                    }

                                    <p className="card-text">
                                        {p.title}
                                    </p>
                                    <div className="justify-content-around d-flex align-items-center">
                                        <span style={{color: "crimson"}}>{p.price} $</span>
                                        <button className="btn btn-danger btn-sm"
                                                onClick={() => addCart(p.id)}
                                        >add to card</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ProductFiltered;

