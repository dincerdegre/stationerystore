import React, { useState } from "react";
import classes from "./Products.module.scss";
import productsJSON from "../../../data/products.json";
import Loader from "../../UIElements/Loader/Loader";
import CardItem from "../CardItem/CardItem";

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
    <div className={classes.products}>
      <div className={classes.top}>
        <h2>Products</h2>
      </div>
      <div className={classes.container}>
        {loading ? (
          <Loader />
        ) : (
          productsJSON.products.map((product) => {
            return (
              <CardItem
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
