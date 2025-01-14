import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const Product = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  // const [products, setProducts] = useState<Data["data"]>([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: productType) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Product;
