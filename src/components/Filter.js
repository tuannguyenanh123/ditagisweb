import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Filter = ({
  products,
  setFiltered,
  activeKind,
  setActiveKind,
  infoProductFromClick,
}) => {
  const categories = [
    { id: 1, title: "Tất cả" },
    { id: 2, title: "Chung cư" },
    { id: 3, title: "Biệt thự" },
    { id: 4, title: "Shophouse" },
    { id: 5, title: "Condotel" },
  ];
  useEffect(() => {
    if (activeKind === categories[0].title) {
      setFiltered(products);
      return;
    }
    const filtered = products.filter((item) => item.type.name === activeKind);
    setFiltered(filtered);
  }, [activeKind]);
  return (
    <div className="">
      <div className="list-category  d-flex" style={{ marginTop: "20px" }}>
        {categories.map((category) => (
          // <span className="categoryBtn">
          <Link
            to="/"
            key={category.id}
            className={`text-dark text-decoration-none categoryBtn ${
              category.title === activeKind && !infoProductFromClick
                ? "active"
                : ""
            }`}
            onClick={() => {
              setActiveKind(category.title);
            }}
          >
            {category.title}
          </Link>
          // </span>
        ))}
      </div>
    </div>
  );
};

export default Filter;
