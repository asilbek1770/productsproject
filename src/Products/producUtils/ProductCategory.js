import React from 'react';

function ProductCategory({categories, selectedCategory,handleFilter}) {
    return (
        <div className="col-2 ">
            <div className="card w-100 text-center" >
                <div className="card-header ">
                    Category
                </div>
                <ul className="list-group list-group-flush" style={{cursor: "pointer"}}>
                    {categories.map(c =>
                        <li
                            key={c.id || c.name}
                            onClick={() => handleFilter(c)}
                            className={selectedCategory.id === c.id ? "list-group-item active" : "list-group-item"}
                        >{c.name}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ProductCategory;