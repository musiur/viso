import { Fragment } from "react";
import Home___Hero from "./_utils/components/home___hero";
import Home___Services from "./_utils/components/home___services";
import Home___Immigration from "./_utils/components/home___immigration";
import Home___Gallery from "./_utils/components/home___gallery";
import Home___Contact from "./_utils/components/home___contact";

const Page = () => {
  return (
    <Fragment>
      <Home___Hero />
      <Home___Services />
      <Home___Immigration />
      <Home___Gallery />
      <Home___Contact />
    </Fragment>
  );
};

export default Page;
