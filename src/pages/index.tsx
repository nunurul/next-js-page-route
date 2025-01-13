import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="">Haloo</div>
      <Link href={"/about"}>About</Link>
    </div>
  );
}
