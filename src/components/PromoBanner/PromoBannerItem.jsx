import React from "react";
import { Link } from "react-router-dom";
import "./PromoBannerItem.scss";

const PromoBannerItem = ({ title, desc, image, link, align }) => {
    let titleAlign;
    if (align === "left") {
        titleAlign = "textLeft";
    } else if (align === "right") {
        titleAlign = "textRight";
    } else {
        titleAlign = "textCenter";
    }
  return (
    <div className="promoBannerContainer">
      <div className="promoBannerItem">
        <div className="pbImageWrapper">
          <img src={image} alt={title} />
        </div>
        <div className={titleAlign}>
          <div className="pbTitle">{title}</div>
          <div className="pbDesc">{desc}</div>
        </div>
        <Link to={link} className="linkButton"></Link>
      </div>
    </div>
  );
};

export default PromoBannerItem;
