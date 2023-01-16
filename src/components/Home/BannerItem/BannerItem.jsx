import React from "react";
import { Link } from "react-router-dom";
import classes from "./BannerItem.module.scss";

const BannerItem = ({ title, desc, image, link, align }) => {
  let titleAlign;
  if (align === "left") {
    titleAlign = classes.textLeft;
  } else if (align === "right") {
    titleAlign = classes.textRight;
  } else {
    titleAlign = classes.textCenter;
  }
  return (
    <div className={classes.container}>
      <div className={classes.bannerItem}>
        <div className={classes.imageContainer}>
          <img src={image} alt={title} />
        </div>
        <div className={titleAlign}>
            <div className={classes.title}>{title}</div>
            <div className={classes.desc}>{desc}</div>
        </div>
        <Link to={link} className={classes.link}></Link>
      </div>
    </div>
  );
};

export default BannerItem;
