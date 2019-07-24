import React, { useContext } from "react";
import ProductWrapper from "./ProductWrapper";
import { EmbedContext } from "../EmbedWrapper";

const ProductList = () => {
  const { products } = useContext(EmbedContext);
  const data = products[0].products.data;

  return data.map(product => (
    <ProductWrapper
      key={product.id}
      highlighted={product.highlighted}
      labels={product.labels}
      title={product.title}
      links={product.links}
      brand={product.brand}
      columns={product.columns}
      description={product.description}
      featurePoint={product.feature_point}
      detailed={product.detailed}
      disclaimer={product.disclaimer}
      meta={product.meta}
    />
  ));
};

export default ProductList;
