import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import dataOriginal from "./../data.json";
import Filter from "./Filter";
import { Link } from "react-router-dom";

const Products = ({ infoProductFromClick }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeKind, setActiveKind] = useState("Tất cả");
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setProducts(dataOriginal);
    setFiltered(dataOriginal);
  }, [favorite]);

  const handleAddProductFavorite = (id) => {
    if (!favorite.includes(id)) {
      setFavorite((prevFavourites) => [
        ...prevFavourites,
        filtered.find((item) => item.id === id),
      ]);
      // let findfavorite = filtered.filter((item) => favorite.includes(item.id));
    } else {
      return;
    }
  };

  // const removeProductFavorite = (id) => {
  //   let index = favorite.indexOf(id);
  //   console.log(index);
  //   let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
  //   setFavorite(temp);
  // };
  return (
    <div className="container__products">
      <div className="category">
        <h2 className="fw-bold">
          {infoProductFromClick ? "KẾT QUẢ TÌM KIẾM" : "SẢN PHẨM"}
        </h2>
        <Filter
          infoProductFromClick={infoProductFromClick}
          products={products}
          setFiltered={setFiltered}
          activeKind={activeKind}
          setActiveKind={setActiveKind}
        />
      </div>
      <div className="container-fluid" style={{ marginTop: "-45px" }}>
        <motion.div animate={{ y: 100 }} className="products row">
          {products &&
            filtered.map((product) => (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="col-12 col-sm-6 col-md-4 col-lg-3 product"
                key={product.id}
              >
                <div
                  className="card "
                  style={{
                    width: "100%",
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  }}
                >
                  <img
                    src={require(`../${product.images[0]}`)}
                    className="card-img-top img-avatar"
                    alt={product.title}
                  />
                  <div className="subAction d-flex justify-content-between">
                    <span className="kind">{product.type.name}</span>
                    <span
                      className="material-icons wishlist"
                      onClick={() => {
                        handleAddProductFavorite(product.id);
                      }}
                    >
                      favorite_border
                    </span>
                  </div>
                  <div className="card-body">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <h5 className="card-title">{product.title}</h5>
                      <span className="text-muted d-block address">
                        {product.address}
                      </span>
                      <span className="d-flex">
                        <p style={{ paddingRight: "8px" }}>Giá từ:</p>
                        <p className="fw-bold">
                          {product.price.from} - {product.price.to} tỷ
                        </p>
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
