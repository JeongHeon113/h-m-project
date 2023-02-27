import React from "react";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [selectProduct, setSelectProduct] = useState(null);
  let { id } = useParams();
  console.log("id", id);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Jeongheon113/h-m-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setSelectProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Row className="detail-area">
      <Col className="detail-left" lg={7} >
        <img src={selectProduct?.img} />
      </Col>
      <Col>
        <div id="detail-title">{selectProduct?.title}</div>
        <div className="wrapper">
          <div id="detail-currency" className="currency">￦{selectProduct?.price}</div>
        </div>
        <div id="detail-new">{selectProduct?.new == true ? "신제품" : ""}</div>
      </Col>
    </Row>
  );
};

export default ProductDetail;
