/* eslint-disable */
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const router = useRouter();
  router.push("/");
  },[])
  return <div className="container hero-section">Please wait...</div>;
};

export default Page;
