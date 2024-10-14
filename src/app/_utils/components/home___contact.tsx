/* eslint-disable */
import Ripple from "@/components/ui/ripple";
import ContactForm from "./form___contact";
import { Fragment } from "react";

const Home___Contact = () => {
  return (
    <Fragment>
      <section className="container section grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-12">
          <div>
          <p className="text-primary font-semibold">Why choose us?</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Immigration Services From Expert Agents
          </h2>
          </div>
          <ul className="grid grid-cols-1 gap-8">
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
              return (
                <li key={item.id} className="flex gap-4">
                  <p className="text-6xl font-bold bg-primary/10 min-w-[60px] h-auto rounded-md flex items-center justify-center text-primary">
                    {item.id}
                  </p>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.paragraph}</p>
                  </div>
                </li>
              );
            })}
          </ul>
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
