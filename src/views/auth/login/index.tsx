import React from "react";
import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";

const LoginViews = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login</h1>
      <h1 className="">Login</h1>
      <button onClick={handleLogin}>Product</button>
      <p
        style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}
      >
        Belum Punya Akun <Link href={"/auth/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginViews;
