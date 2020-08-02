import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../Header";
import bannerImage from "../../product_images/banner.jpg";
import "./sweets.css";
import SideBar from "../SideBar";
import Products from "../Products";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getChocolateData,
  getCandyData,
  getToffeeData
} from "../../store/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BannerImage = () => {
  return (
    <Fragment>
      <div>
        <img src={bannerImage} alt="Banner" className="img-fluid banner" />
      </div>
    </Fragment>
  );
};

function useCategoryItems(category) {
  const dispatch = useDispatch();
  useEffect(() => {
    switch (category) {
      case "chocolate":
        dispatch(getChocolateData());
        break;
      case "candy":
        dispatch(getCandyData());
        break;
      case "toffee":
        dispatch(getToffeeData());
        break;
      default:
        break;
    }
  }, [dispatch, category]);
}

function useSweets(category, brandFilter) {
  let sweets = useSelector((state) => {
    switch (category) {
      case "chocolate":
        return state.Sweets.chocolate.result;
      case "candy":
        return state.Sweets.candy.result;
      case "toffee":
        return state.Sweets.toffee.result;
      default:
        break;
    }
  });

  const brands = sweets
    .map((item) => item.brand.toLowerCase())
    .filter((item, i, arr) => arr.indexOf(item) === i);

  let result;
  if (brandFilter.length) {
    result = sweets.filter((item) =>
      brandFilter.find((filterItem) => filterItem === item.brand.toLowerCase())
    );
  } else {
    result = [...sweets];
  }
  return {
    result,
    brands
  };
}

const Home = () => {
  const [brandFilter, setBrandFilter] = useState([]);
  const [cart, setCart] = useState([]);
  const { category = "chocolate" } = useParams();
  //const dispatch = useDispatch();
  useCategoryItems(category);
  const { result, brands } = useSweets(category, brandFilter);

  if (result && !result.length) return null;

  const handleChange = (brand, checked) => {
    if (checked) {
      setBrandFilter([...brandFilter, brand]);
    } else {
      setBrandFilter(
        brandFilter.filter((item) => item.toLowerCase() !== brand.toLowerCase())
      );
    }
  };

  const handleAddtoCart = (id, quantity) => {
    if (quantity > 0) {
      setCart([...cart, id]);
      toast.success(`Product added to cart, Quantity - ${quantity}`, {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      toast.error("Invalid Quantity", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <Header cartitems={cart.length} />
          <BannerImage />
          <Container fluid>
            <Row>
              <Col xs="3">
                <SideBar brands={brands} propsHandleChange={handleChange} />
              </Col>
              <Col>
                <div className="product-vertical-line">
                  <Products
                    items={result}
                    category={category}
                    propsHandleAddtoCart={handleAddtoCart}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Home;
