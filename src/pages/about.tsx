import Link from "next/link";
import React from "react";
import Home from ".";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="title" data-testid="title">
        About Page
      </h1>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default about;
