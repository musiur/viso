import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Younis",
    username: "@younis",
    body: "I cannot thank Viso Way Consultancy enough for their exceptional service. Thanks to their expertise, I secured a work permit and landed with  a fantastic job in Croatia. From the moment I reached out, the team was incredibly supportive and thorough, guiding me through every step of the process. Their in-depth knowledge of European visa regulations and job market trends made all the difference. If you're considering a move to Europe for work, Viso Way Consultancy is your best ally!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jalil ",
    username: "@jalil ",
    body: "Viso Way Consultancy made my dream of working in Berlin a reality. Their attention to detail and personalized approach ensured that my visa application was flawless. The team provided me with invaluable advice and support, making the entire process smooth and stress-free. The job placement they arranged was a perfect match for my skills and aspirations. I'm now thriving in my new role, and I owe it all to Viso Way Consultancy's outstanding service.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Aisha Khan",
    username: "@aisha_khan",
    body: "Working with Viso Way Consultancy was a game-changer for my career. Their professional and efficient handling of my work permit application for London was remarkable. The team was always available to answer my questions and provided insightful guidance throughout the entire process. Thanks to their efforts, I'm now working as a cashier in a prestigious company in Hungary. I highly recommend Viso Way Consultancy to anyone looking to advance their career in Europe.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Luca",
    username: "@luca",
    body: "The team at Viso Way Consultancy exceeded all my expectations. Their expertise in securing work permits and their commitment to providing personalized support were instrumental in helping me secure a project supervisor role in Milan. Their comprehensive approach, from visa application to job placement, made the transition to my new role seamless. I am incredibly grateful for their dedication and highly recommend their services to anyone looking to work in Europe.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Maya",
    username: "@maya",
    body: "I am beyond impressed with Viso Way Consultancy's professionalism and efficiency. They guided me through the complexities of obtaining a work permit in Amsterdam with such ease. Their knowledge of European immigration laws and job market dynamics was evident throughout the process. Thanks to their dedicated team, I am now pursuing my research career in one of Europe's leading institutions. Viso Way Consultancy is truly exceptional!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Omar El-Sayed",
    username: "@omar_el_sayed",
    body: "Viso Way Consultancy played a crucial role in my successful relocation to Madrid. Their expertise in managing my work permit application and finding the perfect job opportunity was unparalleled. The team's attention to detail and commitment to client satisfaction ensured a smooth and enjoyable transition and I wholeheartedly recommend Viso Way Consultancy to anyone seeking career opportunities in Europe.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative max-w-[240px] md:max-w-md cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full w-[32px] h-[32px]"
          width={32}
          height={32}
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section className="container hero-section">
      <div className="py-10 flex items-center justify-center flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our wall of <span className="text-primary">love</span>
        </h2>
        <p>
          Our clients are our priority, and we are committed to providing them
          with the best immigration services.
        </p>
      </div>
      <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden pt-4">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute top-0 left-0 h-full w-[30px] pointer-events-none bg-gradient-to-r from-white dark:from-background" />
        <div className="absolute top-0 right-0 h-full w-[30px] pointer-events-none bg-gradient-to-l from-white dark:from-background" />
      </div>
    </section>
  );
};

export default Testimonials;
