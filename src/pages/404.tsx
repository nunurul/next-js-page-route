import React from "react";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Page404 = () => {
  return (
    <div className={styles.error}>
      <div>Halaman Tidak Ditemukan</div>
      <div className="">
        <img src="/not_Found.png" alt="" className={styles.error_image} />
      </div>
    </div>
  );
};

export default Page404;
