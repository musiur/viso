import HeadingOne from "@/components/typography/heading-one";
import { ShinyButton } from "@/components/ui/shiny-button";
import BG___HomeHero from "../assets/home-hero-bg";
import Anim___FadeUp from "./anim___fadeup";

const Home___Hero = () => {
  return (
    <section className="bg-muted hero-section relative overflow-hidden">
      <BG___HomeHero className="absolute top-0 left-0 w-auto min-[1380px]:w-full h-full min-[1380px]:h-auto object-contain object-bottom" />
      <div className="container py-16 flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 font-semibold">
          <p className="text-primary text-center text-sm">
            ACHEIVE YOUR DESTINY
          </p>
          <HeadingOne>Empowering </HeadingOne>
          <HeadingOne
            className="text-primary"
            delay={0.75}
            shine={true}
            color="hsl(var(--primary))"
          >
            Your Global Career
          </HeadingOne>
          <HeadingOne delay={1}>from Doha</HeadingOne>
        </div>
        <Anim___FadeUp
          key={1}
          delay={1}
          className="text-center paragraph max-w-2xl"
        >
          At Viso Way Consultancy LLC, we specialize in connecting ambitious
          professionals with incredible career opportunities across Europe,
          Australia, the UK, and Canada. Based in Doha, Qatar, our dedicated
          team is committed to guiding you through the process of securing work
          permits and making your international career aspirations a reality.
        </Anim___FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
          <ShinyButton className="w-full sm:w-auto">
            Explore Immigrations
          </ShinyButton>
          <ShinyButton
            variant="outline"
            delay={0.5}
            className="w-full sm:w-auto"
          >
            Book a Consultation
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default Home___Hero;
