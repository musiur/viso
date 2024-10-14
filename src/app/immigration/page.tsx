"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  router.push("/");
  return <div className="container hero-section">Please wait...</div>;
};

export default Page;
