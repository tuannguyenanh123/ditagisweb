import React, { useState } from "react";

const Search = ({ onSubmit }) => {
  const [province, setProvince] = useState("Chọn tỉnh");
  const [area, setArea] = useState("Chọn diện tích");
  //   useEffect(() => {
  //     setProvince(dataOriginal);
  //   }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container__filter">
      <h1 className="name-web">Sàn giao dịch bất động sản</h1>
      <div className="wrapper d-flex align-items-center justify-content-between">
        <div className="filter__options d-flex align-items-center justify-content-around">
          <div className="province">
            <span className="text-white title-filter">Tỉnh</span>
            <div className="dropdown">
              <div className="dropdown-select">
                <span className="select">{province}</span>
                <span className="material-icons">expand_more</span>
              </div>
              <div className="dropdown-list">
                <div
                  className="dropdown-list__item"
                  onClick={(e) => {
                    setProvince(e.target.textContent);
                  }}
                >
                  Đà Nẵng
                </div>
                <div
                  className="dropdown-list__item"
                  onClick={(e) => {
                    setProvince(e.target.textContent);
                  }}
                >
                  Hà Nội
                </div>
                <div
                  className="dropdown-list__item"
                  onClick={(e) => {
                    setProvince(e.target.textContent);
                  }}
                >
                  Hồ Chí Minh
                </div>
              </div>
            </div>
          </div>
          <div className="area">
            <span className="text-white title-filter">Diện tích</span>
            <div className="dropdown">
              <div className="dropdown-select">
                <span className="select">{area}</span>
                <span className="material-icons">expand_more</span>
              </div>
              <div className="dropdown-list">
                <div
                  className="dropdown-list__item"
                  onClick={(e) => {
                    setArea(e.target.textContent);
                  }}
                >
                  &#60; 30 m2
                </div>
                <div
                  className="dropdown-list__item"
                  onClick={(e) => {
                    setArea(e.target.textContent);
                  }}
                >
                  30 - 45 m2
                </div>
                <div
                  className="dropdown-list__item"
                  onClick={(e) => {
                    setArea(e.target.textContent);
                  }}
                >
                  45 - 60 m2
                </div>
                <div
                  className="dropdown-list__item"
                  onClick={(e) => {
                    setArea(e.target.textContent);
                  }}
                >
                  &#62; 60 m2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit} className="search-form">
            <button type="submit">
              <span className="material-icons icon">search</span>
            </button>
            <input type="text" placeholder="Tìm kiếm" name="q" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
