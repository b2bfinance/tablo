import { makeStyles } from "@material-ui/styles";
import React from "react";
import ProductLabel from "./ProductLabel";

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      lineHeight: 1,
      margin: theme.spacing(1, 0),
      [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(0.5, 0),
      },
    },
  }),
  { name: "ProductLabels" }
);

const ProductLabels = ({ labels }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {labels.map((label, i) => (
        <ProductLabel key={i} label={label} />
      ))}
    </div>
  );
};

export default ProductLabels;
