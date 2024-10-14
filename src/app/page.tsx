import { Fragment } from "react";
import Home___Hero from "./_utils/components/home___hero";
import Home___Services from "./_utils/components/home___services";
import Home___Immigration from "./_utils/components/home___immigration";
import Home___Gallery from "./_utils/components/home___gallery";
import Home___Contact from "./_utils/components/home___contact";
import Comp___Accordion from "./_utils/components/comp___accordion";
import Home___ServicesDetails from "./_utils/components/home___services_details";

const Page = () => {
  return (
    <Fragment>
      <Home___Hero />
      <Home___Services />
      <Home___ServicesDetails />
      <Home___Immigration />
      <Home___Contact />
      <Comp___Accordion />
      <Home___Gallery />
    </Fragment>
  );
};

export default Page;
