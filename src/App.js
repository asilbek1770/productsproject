import React,{Component} from 'react';
import RouterDom from "./ReactRouter/Component/RouterDom";
import Card from "./MemoryGame/Component/Card";
import Search from "./SearchProject/Component/Search";
import Movies from "./TableMapFackeDatabaseUsing/Component/Movies";
import {BrowserRouter} from "react-router-dom";
import HttpServices from "./Http services/HttpServices";
import ProductContext, {DataContext} from "./Products/Contexts/ProductContext";

class App  extends Component{
    render() {
        return (
            <ProductContext>
                <RouterDom />
            </ProductContext>
        );
    }
}
export default App;
