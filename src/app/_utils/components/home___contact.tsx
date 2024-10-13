import Ripple from "@/components/ui/ripple";
import ContactForm from "./form___contact";
import { Fragment } from "react";

const Home___Contact = () => {
  return (
    <Fragment>
      <section className="container section">
        <div>
          <p>Why choose us?</p>
          <h2>Immigration Services From Expert Agents</h2>
          {[
            {
              id: 1,
              title: "Legal Immigration Processing",
              paragraph:
                "We have processing all legal immigrationo process and documnet require.",
            },
            {
              id: 2,
              title: "Required Documents Support",
              paragraph:
                "Required Documents Support A registered immigration consultant will provide you with all the resources and let you have all the information promptly and efficiently.",
            },
          ].map((item: any) => {
            return <div key={item.id}>{item.id}</div>;
          })}
        </div>
        <ContactForm />
      </section>
      <section id="contact" className="container section relative">
        <Ripple />
      </section>
    </Fragment>
  );
};

export default Home___Contact;
