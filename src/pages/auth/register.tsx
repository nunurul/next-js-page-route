import Link from "next/link";
import React from "react";

const PageRegister = () => {
  return (
    <div>
      <h1>register</h1>
      <p>
        sudah punya akun <Link href={"/auth/login"}>Login</Link>
      </p>
    </div>
  );
};

export default PageRegister;
