import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const BrandList = ({ item, propsHandleChange }) => {
  const handleChange = (e) => {
    propsHandleChange(e.target.value, e.target.checked);
  };

  return (
    <Form className="brand-list">
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            onChange={handleChange}
            value={item.toLowerCase()}
          />{" "}
          {item.toLowerCase().charAt(0).toUpperCase() + item.slice(1)}
        </Label>
      </FormGroup>
    </Form>
  );
};

export default BrandList;
