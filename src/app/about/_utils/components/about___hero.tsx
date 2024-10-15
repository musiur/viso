import HeadingOne from "@/components/typography/heading-one";

import BG___HomeHero from "@/app/_utils/assets/home-hero-bg";
import Anim___FadeUp from "@/app/_utils/components/anim___fadeup";

const About___Hero = () => {
  return (
    <section>
      <div className="hero-section relative bg-muted overflow-hidden [&>*]:text-center">
        <BG___HomeHero className="absolute top-0 left-0 w-auto min-[1380px]:w-full h-full min-[1380px]:h-auto object-contain object-bottom" />
        <div className="container py-16 flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 font-semibold">
            <HeadingOne
              className="text-primary capitalize"
              delay={0.75}
              shine={true}
              color="hsl(var(--primary))"
            >
              Welcome to Viso Way Consultancy
            </HeadingOne>
          </div>
          <Anim___FadeUp delay={1.25} key={1}>
            <p>
              At Viso Way Consultancy, based in the heart of Doha, Qatar, we're
              more than just a visa agency; we're your gateway to international
              career success. With a decade of specialized experience in
              securing work permits and visas for Europe, Canada, and Australia,
              we are dedicated to helping professionals like you achieve your
              global career aspirations.
            </p>
          </Anim___FadeUp>
        </div>
      </div>
    </section>
  );
};

export default About___Hero;
