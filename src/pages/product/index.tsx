import { fetcher } from "@/utils/swr/fetcher";
import ProductView from "@/views/product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Product = () => {
  // const [products, setProducts] = useState([]);
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default Product;
