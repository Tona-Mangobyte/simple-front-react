import React from "react";
import styled from "styled-components";

const Root = styled.div`
  /*justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;*/
`;

function Loader() {
    return (
        <Root>
            <div style={{textAlign: "center", paddingTop: "30px"}}>
                Loading...
            </div>
        </Root>
    );
}

export default Loader;
