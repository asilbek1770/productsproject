import React, {Component} from 'react';
import Joi from "joi-browser";
import FormGroup from "../LogInSignUp/LogInUtils/FormGroup";

import {Link} from "react-router-dom";
import {DataContext} from "./Contexts/ProductContext";

class AddNewProduct extends Component {
    state = {
        productDetail: {
            productTitle: "",
            productDescription: "",
            productPrice: null,
            productImg: "",
            productCategory: "",
        },
        errors: {}
    };

    scheme = {
        productTitle: Joi.string().required().label("ProductTitle"),
        productDescription: Joi.string().required().label("productDescription"),
        productPrice: Joi.number().required().label("ProductPrice"),
        productImg: Joi.string().required().label("ProductImg"),
        productCategory: Joi.string().required().label("ProductCategory"),
    }

    validation = () => {
        // Joi yordamida validatsiya
        let result = Joi.validate(this.state.productDetail, this.scheme, {
            abortEarly: false
        })
        if(!result.error) return null;
        const errors = {};
        result.error.details.forEach((err) => (errors[err.path[0]] = err.message) )
        return errors
    }
    validProperty = ({ name, value}) => {

         if(name === "productTitle")
            if(value.trim() === "") return "productTitle is not allowed to be empty !"
        if(name === "productPrice")
            if(value.trim() === "") return "productPrice is not allowed to be empty !"
        if(name === "productImg")
            if(value.trim() === "") return "productImg is not allowed to be empty !"
        if(name === "productCategory")
            if(value.trim() === "") return "productCategory is not allowed to be empty !"

        return null
    }
    handleChange = ({currentTarget: input}) => {

        let errors = {...this.state.errors}
        let errorMessage = this.validProperty(input)
        if(errorMessage)
            errors[input.name] = errorMessage
        else
            errors[input.name] = null     // 1)
        // delete errors[input.name]  // 2)


        const productDetail = {...this.state.productDetail}
        productDetail[input.name] = input.value
        this.setState({ productDetail,errors })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validation();
        this.setState({errors: errors ?? {}})
        if(errors) return ;
        this.context.addProductDatabase(this.state.productDetail)
        this.props.history.replace("/products")
    }
    static contextType = DataContext
    render() {
        const { productDetail,errors } = this.state
        return (
            <section>
                <div className="row">
                    <div className="col-md-6 offset-md-3 my-1">
                        <h4 className="text-center">Add New Product</h4>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup
                                name="productTitle"
                                label="ProductTitle"
                                value={productDetail.productTitle}
                                onChange={this.handleChange}
                                type="text"
                                error={errors.productTitle}
                            />
                            <FormGroup
                                name="productDescription"
                                label="ProductDescription"
                                value={productDetail.productDescription}
                                onChange={this.handleChange}
                                type="text"
                                error={errors.productDescription}
                            />
                            <FormGroup
                                name="productPrice"
                                label="ProductPrice"
                                value={productDetail.productPrice}
                                onChange={this.handleChange}
                                type="number"
                                error={errors.productPrice}
                            />
                            <FormGroup
                                name="productImg"
                                label="ProductImg"
                                value={productDetail.productImg}
                                onChange={this.handleChange}
                                type="text"
                                error={errors.productImg}
                            />
                            <FormGroup
                                name="productCategory"
                                label="ProductCategory"
                                value={productDetail.productCategory}
                                onChange={this.handleChange}
                                type="text"
                                error={errors.productCategory}
                            />
                            <button
                                type="submit"
                                className="btn btn-danger btn-sm mx-4 float-right"
                            >AddProduct</button>
                            <button className="btn btn-primary"
                                onClick={() => this.props.history.replace("/products")}
                            >back to products</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default AddNewProduct;