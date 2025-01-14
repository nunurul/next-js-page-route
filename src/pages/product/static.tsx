import ProductView from "@/views/product";
import React from "react";
import { ProductType } from "./product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={[]} />
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  //fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
