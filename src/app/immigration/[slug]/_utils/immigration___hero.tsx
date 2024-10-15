import HeadingOne from "@/components/typography/heading-one";

import BG___HomeHero from "@/app/_utils/assets/home-hero-bg";

const Immigration___Hero = ({ params }: { params: { slug: string } }) => {
  return (
    <section>
      <div className="hero-section relative bg-muted overflow-hidden">
        <BG___HomeHero className="absolute top-0 left-0 w-auto min-[1380px]:w-full h-full min-[1380px]:h-auto object-contain object-bottom" />
        <div className="container py-16 flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 font-semibold">
            <HeadingOne
              className="text-primary capitalize"
              delay={0.75}
              shine={true}
              color="hsl(var(--primary))"
            >
              {params?.slug?.replaceAll("-", " ")}
            </HeadingOne>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Immigration___Hero;
