import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "./Product";
import "./product.css";

const Products = ({ items, category, propsHandleAddtoCart }) => {
  const handleAddtoCart = (id, quantity) => {
    propsHandleAddtoCart(id, quantity);
  };
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="product-title">
            {category.charAt(0).toUpperCase() + category.slice(1)} (
            {items.length})
            <hr />
          </Col>
        </Row>
        <Row className="products-row">
          {items.map((item) => (
            <Col xs="4" key={item.id}>
              <Product item={item} propsHandleAddtoCart={handleAddtoCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Products;
