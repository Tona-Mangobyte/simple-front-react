import React from "react";
import Helmet from "react-helmet";

const SimplePage = (props) => {
    console.log(`execute Simple `);
    return(
        <React.Fragment>
        <Helmet title="Simple page" />
        <div className="page-header">
            <h4> Hello world </h4>
        </div>
        </React.Fragment>
    );
}

export default SimplePage;
