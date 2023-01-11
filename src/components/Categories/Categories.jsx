import React, { useState } from "react";
import ProductItem from "../Product/ProductItem";
import "./Categories.scss";
import productsJSON from "../../data/products.json";
import Loader from "../UI/Loader/Loader";

const Categories = () => {
  const [loading, setLoading] = useState(true);

  useState(() => {
    const timeout = setTimeout(() => {
      if (productsJSON?.products.length !== 0) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <div className="categories">
      <div className="top">
        <h2>Products</h2>
      </div>
      <div className="categoriesContainer">
        {loading ? (
          <Loader />
        ) : (
          productsJSON.products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                excerpt={product.excerpt}
                slug={product.slug}
                image={product.image}
                price={product.price}
                oldPrice={product.oldprice}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Categories;
