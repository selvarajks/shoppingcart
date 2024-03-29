import React from "react";
import SortContainer from "../Sort/SortContainer";
import "./style.scss";

interface Props {
  productsLength: number;
}

const ShelfHeader: React.FunctionComponent<Props> = ({productsLength}) => {
  return(
   
    <div className="shelf-header">
      <h1>Online Shopping</h1>
      <small className="products-found">
        <span>{productsLength} Product(s) found.</span>
      </small>
      <SortContainer/>
    </div>
  );
};

export default ShelfHeader;
