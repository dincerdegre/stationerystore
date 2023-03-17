import React from "react";
import Button from '../../UIElements/Button/Button';
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
          <img src={image} alt={title} loading={"lazy"} />
        </div>
        <div className={titleAlign}>
            <div className={classes.title}>{title}</div>
            <div className={classes.desc}>{desc}</div>
        </div>
        <Button to={link} className={classes.link}></Button>
      </div>
    </div>
  );
};

export default BannerItem;
