import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="flex items-center px-4 -mb-1 hover:text-lime-600  dark:border-transparent text-lime-800 dark:text-[#96b565]" onClick={() => logout({ returnTo: "https://medtrack.netlify.app" })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
