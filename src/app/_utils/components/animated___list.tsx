"use client";

import ICON___FlagAustraliaRounded from "@/components/icons/australia__rounded";
import ICON___FlagEuRounded from "@/components/icons/eu__rounded";
import ICON___FlagCanadaRounded from "@/components/icons/flag__canada__rounded";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
}

let notifications = [
  {
    name: "Europe",
    description: "Our services are available in 27 European countries.",

    icon: <ICON___FlagEuRounded className="min-w-10 min-h-10" />,
  },
  {
    name: "Australia",
    description: "Our services are available in Australia.",
    icon: <ICON___FlagAustraliaRounded className="min-w-10 min-h-10" />,
  },
  {
    name: "Canada - Express Entry",
    description: "Our services are available in Canada.",
    icon: <ICON___FlagCanadaRounded className="min-w-10 min-h-10" />,
  },
  {
    name: "Canada - Provincial Nominee Program",
    description: "Our services are available in Canada.",
    icon: <ICON___FlagCanadaRounded className="min-w-10 min-h-10" />,
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div>
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function Cards___AnimatedList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
