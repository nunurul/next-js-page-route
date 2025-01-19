import React from "react";
import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>

      <div className={styles.profile}>
        {data?.user?.image && (
          <img
            className={styles.avatar}
            src={data.user.image}
            alt={data.user.fullname}
          />
        )}
        {data && data.user.fullname}
        {data ? (
          <button onClick={() => signOut()}>sign out</button>
        ) : (
          <button onClick={() => signIn()}>sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
