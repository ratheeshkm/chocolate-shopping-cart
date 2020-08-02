import React, { Fragment, useState } from "react";
import { Container } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { FaShoppingBasket } from "react-icons/fa";
import { useParams } from "react-router";

const NavList = () => {
  const navList = ["chocolate", "toffee", "candy"];
  const { category = "chocolate" } = useParams();
  return (
    <Fragment>
      {navList.map((item, index) => (
        <NavItem key={index}>
          <NavLink
            href={"/sweets/" + item}
            className={category === item ? "active text-primary" : ""}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </NavLink>
        </NavItem>
      ))}
    </Fragment>
  );
};

const Header = ({ cartitems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container
      className="no-padding"
      style={{
        padding: "0px",
        position: "fixed",
        paddingRight: "30px",
        zIndex: "1000"
      }}
    >
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Sweets</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavList />
          </Nav>
          <NavbarText>
            <FaShoppingBasket
              style={{ width: "20px", height: "25px", color: "green" }}
            />{" "}
            Basket has <b>{cartitems}</b> items
          </NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
