import Globe from "@/components/ui/globe";
import COMP___ServicesVerticalMarquee from "./comp___services";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const Home___Services = () => {
  return (
    <div className="container section mx-auto overflow-hidden space-y-8">
      <div className="relative">
        <VelocityScroll
          text="Australia USA UK Canada EUROPE"
          default_velocity={4}
          className="font-display text-center text-5xl font-bold tracking-[-0.02em] text-primary/20 rop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white via-white to-transparent" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white via-white to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Globe className="z-10 -mb-10 sm:-mb-20" />
          <h2 className="text-4xl md:text-5xl font-semibold text-primary z-0">
            Countries We Support for Immigration.
          </h2>
        </div>
        <div>
          <COMP___ServicesVerticalMarquee />
        </div>
      </div>
    </div>
  );
};

export default Home___Services;
