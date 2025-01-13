import React from "react";
import Navbar from "../navbar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      <div className="">Footer</div>
    </main>
  );
};

export default AppShell;
