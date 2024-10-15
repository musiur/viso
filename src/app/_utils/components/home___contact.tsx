/* eslint-disable */
import { Fragment } from "react";
import Form___Contact from "./form___contact";
import Anim___FadeUp from "./anim___fadeup";

const Home___Contact = () => {
  return (
    <Fragment>
      <section className="container section grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Anim___FadeUp delay={0.25} key={1} className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Begin Your Global Career Journey with Us
          </h2>
          <p>
            Are you ready to take the next step in your international career?
            Contact Viso Way Consultancy today and discover how we can help you
            achieve your professional and personal goals. Explore exciting
            opportunities, experience new cultures, and advance your career on a
            global scale.
          </p>
        </Anim___FadeUp>
        <Anim___FadeUp delay={0.5} key={2}>
          <Form___Contact />
        </Anim___FadeUp>
      </section>
    </Fragment>
  );
};

export default Home___Contact;
