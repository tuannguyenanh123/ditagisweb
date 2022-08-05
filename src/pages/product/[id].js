import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import data from "./../../data.json";

const DetalProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const aproduct = data.find((item) => item.id === id);
    setProduct(aproduct);
  }, [id]);
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={product && require("../../" + product.images[0])}
              className="d-block w-100 img-slider"
              alt="anh1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={product && require("../../" + product.images[1])}
              className="d-block w-100 img-slider"
              alt="anh2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="content">
        <div className="title d-flex align-items-center justify-content-between">
          <div
            className="sub-title d-flex flex-column"
            style={{ fontSize: "20px" }}
          >
            <h1 className="nameProduct" style={{ fontSize: "4rem" }}>
              {product && product.title}
            </h1>
            <span className="py-2">{product && product.address}</span>
            <span className="py-2">Diện tích: {product && product.area}m2</span>
          </div>
          <h1 className="price" style={{ fontSize: "5rem" }}>
            {product && product.price.from} - {product && product.price.to} tỷ
          </h1>
        </div>
        <div className="content-main">
          <h2>Thông tin chi tiết</h2>
          <span style={{ fontSize: "20px" }}>
            {product && product.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetalProduct;
