import React, {Component, createContext} from 'react';
import {getProducts} from "../services/ProductsFromJson";
import uuid from "uuid/dist/v1"

export const DataContext = createContext();


class ProductContext extends Component {
    state = {
        products: getProducts(),
        cart: [],
        total: 0,
        addedProducts: null
    }

    addProductDatabase = (productDetail) => {
        const addedProducts = {...this.state.addedProducts}
        addedProducts.id = uuid()
        addedProducts.title = productDetail.productTitle
        addedProducts.description = productDetail.productDescription
        addedProducts.img = productDetail.productImg
        addedProducts.price = productDetail.productPrice
        addedProducts.category = productDetail.productCategory
        addedProducts.count = 1
        this.setState({addedProducts: addedProducts})
        this.setState({products: [addedProducts, ...this.state.products]})

        localStorage.setItem('addedProducts',JSON.stringify(this.state.products),[this.state.products])

    }


    addCart = (id) => {
        const {products, cart} = this.state;
        const check = cart.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            this.setState({cart: [...cart, ...data]})
        } else {
            alert("this product has added")
        }
    }

    decrement = id => {
        const {cart} = this.state;
        cart.forEach(item => {
            if(item.id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    deleteProductFromProducts = (id) => {
        const {products} = this.state
        this.setState({products: products.filter(item => item.id !== id)})
    }
    increment = id => {
        const {cart} = this.state;
        cart.forEach(item => {
            if(item.id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };
    removeProduct = id => {
        if(window.confirm("Do you want remove this product ??")){
            const {cart} = this.state;
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
    };
    getTotal = () => {
        const {cart} = this.state;
        const res = cart.reduce((prev,item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
        // this.getTotal();
    }

    // componentDidMount() {
    //     const localData = localStorage.getItem('addedProducts')
    //     return localData ? JSON.parse(localData) : []
    // }

    render() {
        const { products,cart,total } = this.state
        const { addProductDatabase,addCart,decrement,increment,getTotal,removeProduct,deleteProductFromProducts } = this
        return (
            <DataContext.Provider value={{products,cart,addCart,total,
                addProductDatabase,deleteProductFromProducts,
                decrement,increment,getTotal,removeProduct} }>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default ProductContext;