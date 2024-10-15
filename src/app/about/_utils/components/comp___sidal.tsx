import Anim___FadeUp from "@/app/_utils/components/anim___fadeup";
import clsx from "clsx";
import { CheckCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";

export type Type___CompSidalProps = {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  reverse?: boolean;
  list?: string[];
};

const Comp___Sidal = ({
  id,
  imageSrc,
  title,
  description,
  reverse = false,
  list,
}: Type___CompSidalProps) => {
  return (
    <Anim___FadeUp delay={id * 0.25} key={id}>
      <div
        className={clsx("flex justify-center items-center gap-10", {
          "flex-col-reverse sm:flex-row-reverse": reverse,
          "flex-col sm:flex-row": !reverse,
        })}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full flex-1"
        />
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {title}
          </h2>
          <p>{description}</p>
          {list && (
            <ul className="space-y-2">
              {list.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-primary mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Anim___FadeUp>
  );
};

export default Comp___Sidal;
