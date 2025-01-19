import React from "react";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Page404 = () => {
  return (
    <div className={styles.error}>
      <Image
        src="/not_Found.png"
        alt=""
        className={styles.error_image}
        width={600}
        height={600}
      />
      <div>Halaman Tidak Ditemukan</div>
    </div>
  );
};

export default Page404;
