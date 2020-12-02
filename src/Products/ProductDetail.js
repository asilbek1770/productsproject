
import React, {Component} from 'react';
import {DataContext} from "./Contexts/ProductContext";


class ProductDetail extends Component {

    static  contextType = DataContext;
    state = {
        product: []
    }
    getProduct = () => {
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item => {
                return item.id.toString() === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };
    componentDidMount() {
        this.getProduct();
    }

    render() {
        const { product } = this.state
        const {replace} = this.props.history
        return (
            <section>
                <h4 className="text-center mt-1">Details</h4>
                {product.map(p =>
                <div className="row p-4" key={p.id}>
                        <div className="col-md-6 ">
                            <img src={p.img} alt="" width={500} height={300}/>
                        </div>
                        <div className="col-md-6 pt-5">
                            <p>product type:  <span className="ml-4" style={{color: "crimson"}}>{p.title}</span></p>
                            <p>description:  <span className="ml-4" style={{color: "crimson"}}>{p.description}</span> </p>
                            <p>product price:   <span className="ml-4" style={{color: "crimson"}}>{p.price} $</span></p>
                            <button className="btn btn-light btn-sm" onClick={() => replace("/products") }> backToProducts</button>
                            <button className="btn btn-danger ml-4 btn-sm">addToCard</button>
                        </div>
                </div>
                )}
            </section>
        );
    }
}

export default ProductDetail;
