"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <Button variant={"ghost"} className="px-0 py-0" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
}

export default SignOutButton;
