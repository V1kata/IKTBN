"use client";

import { useEffect } from "react";
import { useUser } from "@/app/context/UserContext";

export default function KeepProfile({ children }) {
  const { userData, setUserData } = useUser();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && !userData) {
      setUserData(user);
    } else if (!user && userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  }, [userData, setUserData]);

  return children;
}