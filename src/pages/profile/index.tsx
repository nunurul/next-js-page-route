import { useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
  const { data }: any = useSession();
  return (
    <div>
      <h1>ProfilePage</h1>
      <div>{data && data.user.fullname}</div>
    </div>
  );
};

export default ProfilePage;
