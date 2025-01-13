import { useRouter } from "next/router";
import React from "react";

const ShopProduct = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Shop Product</h1>
      <p>
        shop : {query.slug ? query.slug[0] : ""} - {query.slug && query.slug[1]}
      </p>
    </div>
  );
};

export default ShopProduct;
