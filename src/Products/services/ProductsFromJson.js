import products from "../../ReactLessons/Products.json";
import categories from "./Category.json";

export const getProducts = () => {
    return [...products]
}
export const getCategories = () => {
    return [...categories]
}