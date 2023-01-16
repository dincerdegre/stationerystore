import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import classes from "./ListItem.module.scss";

const ListItem = ({ id, title, image, quantity, price, onDelete }) => {
  return (
    <div className={classes.listItem} id={id}>
      <div className={classes.imageContainer}>
        <img src={image[0]} alt={title} />
      </div>
      <div className={classes.detailsContainer}>
        <h3>{title}</h3>
        <div className={classes.quantityPrice}>
          {quantity} Qty x ${price}
        </div>
        <div className={`${classes.total} noSelect`}>${quantity * price}</div>
      </div>
      <div
        className={classes.deleteContainer} onClick={()=>{onDelete(id)}}>
        <DeleteForeverIcon fontSize="large" />
      </div>
    </div>
  );
};

export default ListItem;
