import About___Hero from "./_utils/components/about___hero";
import About___About from "./_utils/components/about___about";
import About___Approach from "./_utils/components/about___approach";
import Home___Contact from "../_utils/components/home___contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Viso Way Consultancy",
  description:
    "At Viso Way Consultancy, based in the heart of Doha, Qatar, we're more than just a visa agency. We're your gateway to international career success. With a decade of specialized experience in securing work permits and visas for Europe, Canada, and Australia, we are dedicated to helping professionals like you achieve your global career aspirations.",
};

const Page = () => {
  return (
    <div>
      <About___Hero />
      <About___About />
      <About___Approach />
      <Home___Contact />
    </div>
  );
};

export default Page;
