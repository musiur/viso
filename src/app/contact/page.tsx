import { Fragment } from "react";
import ContactForm from "../_utils/components/form___contact";
import Ripple from "@/components/ui/ripple";

type Type___ContactInformation = {
  id: number;
  title: string;
  paragraph: string;
}

const Page = () => {
  return (
    <Fragment>
      <section className="container py-40  grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-12">
          <div>
            <p className="text-primary font-semibold">Contact us?</p>
            <h2 className="text-3xl md:text-4xl font-bold">
            Feel free to contact with us any time
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-8">
            {ContactInformations.map((item: Type___ContactInformation) => {
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

export default Page;

const ContactInformations: Type___ContactInformation[] = [
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
]
