import { Fragment } from "react";
import Home___Hero from "./_utils/components/home___hero";
import Home___Services from "./_utils/components/home___services";
import Home___Immigration from "./_utils/components/home___immigration";

const Page = () => {
  return (
    <Fragment>
      <Home___Hero />
      <Home___Services />
      <Home___Immigration />
    </Fragment>
  );
};

export default Page;
