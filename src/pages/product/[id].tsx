import { fetcher } from "@/utils/swr/fetcher";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { ProductType } from "./product.type";

const DetalProduct = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  // client side
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.product}`,
  //   fetcher
  // );
  return (
    // client side
    // <div>
    //   <DetailProduct product={isLoading ? [] : data.data} />
    // </div>
    // server side
    // <div>
    //   <DetailProduct product={product} />
    // </div>
    <div></div>
  );
};

export default DetalProduct;

// dipanggil setiap melakukan request
// export async function getServerSideProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   // fetch data
//   const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// static

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { product: string };
}) {
  //fetch data
  const res = await fetch(
    `http://localhost:3000/api/product/${params.product}`
  );
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
