import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const Product = ({ item, propsHandleAddtoCart }) => {
  const { id, brand, name, image } = item;
  const [quantity, setQuantity] = useState(0);
  const handleQryChange = (event) => {
    setQuantity(event.target.value >= 0 ? event.target.value : "");
  };
  const handleAddtoCart = (id, quantity) => {
    propsHandleAddtoCart(id, quantity);
  };
  return (
    <div style={{ marginBottom: "30px" }} key={id}>
      <Card>
        <CardImg top src={image} alt="Card image cap" className="prod-image" />
        <CardBody>
          <CardTitle className="prod-title">{brand}</CardTitle>
          <CardSubtitle className="prod-subTitle">{name}</CardSubtitle>
          <InputGroup size="sm" className="prod-qty">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Qty</InputGroupText>
            </InputGroupAddon>
            <Input onChange={handleQryChange} value={quantity} />
            <Button
              color="warning"
              size="sm"
              onClick={() => handleAddtoCart(id, quantity)}
            >
              ADD <span className="bskt-icon"></span>
            </Button>{" "}
          </InputGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
