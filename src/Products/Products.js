import React, {Component, createContext} from 'react';
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import {getCategories} from "./services/ProductsFromJson"
import "./producUtils/products.css"
import {DataContext} from "./Contexts/ProductContext";
import ProductCategory from "./producUtils/ProductCategory";
import ProductFiltered from "./producUtils/ProductFiltered";



class Products extends Component {
    state = {
        categories: [],
        selectedCategory: "",
        selectedProductDetail: []
    }

    handleFilter = (category) => {
        this.setState({ selectedCategory: category })
    }





    componentDidMount() {
        const category = [{name: "all products"}, ...getCategories()]
        this.setState({ categories: category})
    }


    static contextType = DataContext
    render() {
        const { products,addCart,deleteProductFromProducts } = this.context
        const {categories, selectedCategory} = this.state;
        const filter = selectedCategory && selectedCategory.id ?
            products.filter((p) => p.category === selectedCategory.name) : products;

        if(products.length === 0){
            return <section>
                <h4 className="text-center mt-2">Nothing product in database </h4>

            </section>
        }

        const {user} = this.props
        return (
            <section>
                <h4 className="text-center mt-1">Products </h4>
                <div className="row ml-4 mt-4">

                    {products.length > 0 ?
                        <ProductCategory
                            categories={categories}
                            selectedCategory={selectedCategory}
                            handleFilter={this.handleFilter}
                        /> : ""
                    }

                    <ProductFiltered
                        user={user}
                        filter={filter}
                        addCart={addCart}
                        deleteProductFromProducts={deleteProductFromProducts}
                    />

                </div>
            </section>
        );
    }
}

Products.propTypes = {
    categories: PropTypes.string.isRequired,
}

export default Products;
