import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="flex items-center px-4 -mb-1  dark:border-transparent md:text-lime-800 hover:text-lime-600 text-lime-600" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;