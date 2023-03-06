import React from "react";
import Helmet from "react-helmet";

const ProductList = (props) => {
    console.log(`execute Product list`);
    return(
        <React.Fragment>
            <Helmet title="Product list" />
            <div className="page-header">
                <h4> Hello world </h4>
            </div>
            <div className="form-area">
                <h4> Hello world </h4>
            </div>
        </React.Fragment>
    )
}

export default ProductList;
