import { cn } from "@/lib/utils";

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className, "")}
      >
        <circle cx="300" cy="300" r="300" fill="white" />
        <circle
          cx="300"
          cy="300"
          r="299.5"
          stroke="#DEB655"
          strokeOpacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M302.355 288.466L211.355 31.4656C325.355 -10.5344 428.189 37.6323 465.355 66.9656L370.355 320.966L482.355 370.966L493.355 336.466L407.855 297.466L412.855 288.466L578.355 360.966C555.555 476.566 455.189 543.799 407.855 562.966L424.855 514.466L213.355 411.466L209.355 419.966L223.855 428.966L284.355 581.466L337.855 582.466C330.655 583.666 299.189 584.299 284.355 584.466C199.955 584.066 123.189 524.632 95.3553 494.966C71.522 470.966 22.4553 403.466 16.8553 325.466C11.2553 247.466 34.522 190.966 46.8553 172.466L302.355 288.466ZM56.8553 151.466C64.0553 133.066 85.522 111.132 95.3553 102.466L110.855 151.466H56.8553ZM560.855 181.466L509.355 312.966L581.355 346.966C586.689 312.466 590.055 231.066 560.855 181.466ZM304 194L301.5 203L308 196.5L321 215L328.5 201.5L318.5 187.5C323.5 182.833 335.3 170 342.5 156L387.5 201.5L397 185.5L361 127.5C370.167 113.833 387.9 81.4 385.5 61C376.167 66 353.9 83.8 339.5 115L271.5 111L261.5 126L323 144C318.5 151 309.2 168 308 180H288.5L282 191L304 194ZM19.5 272V285L140.5 346L133.5 360.5L430.5 502L454.5 448.5C474.5 453.5 516.8 463 526 461L348 379L341 396L331 370.5L173 297L190.5 341.5L381 431.5L373.5 443L19.5 272Z"
          fill="url(#paint0_linear_3_10)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_10"
            x1="300.462"
            y1="15"
            x2="300.462"
            y2="584.466"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F3C042" />
            <stop offset="1" stopColor="#D09300" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col items-start justify-start leading-none [&>*]:text-[20px] [&>*]:font-semibold">
        <p className="text-primary">Viso Way</p>
        <p className="text-black/50">Consultancy</p>
      </div>
    </div>
  );
};

export default Logo;
