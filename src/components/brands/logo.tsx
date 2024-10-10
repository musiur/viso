"use client";
import { cn } from "@/lib/utils";
import SvgWrapper from "../layouts/svg-wrapper";

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <SvgWrapper
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
          d="M211.355 31.4656L302.355 288.466L46.8553 172.466C34.522 190.966 11.2553 247.466 16.8553 325.466C22.4553 403.466 71.522 470.966 95.3553 494.966C123.189 524.632 199.955 584.066 284.355 584.466C299.189 584.299 330.655 583.666 337.855 582.466L284.355 581.466L223.855 428.966L209.355 419.966L213.355 411.466L424.855 514.466L407.855 562.966C455.189 543.799 555.555 476.566 578.355 360.966L412.855 288.466L407.855 297.466L493.355 336.466L482.355 370.966L370.355 320.966L465.355 66.9656C428.189 37.6323 325.355 -10.5344 211.355 31.4656ZM304 194L301.5 203L308 196.5L321 215L328.5 201.5L318.5 187.5C323.5 182.833 335.3 170 342.5 156L387.5 201.5L397 185.5L361 127.5C370.167 113.833 387.9 81.4 385.5 61C376.167 66 353.9 83.8 339.5 115L271.5 111L261.5 126L323 144C318.5 151 309.2 168 308 180H288.5L282 191L304 194ZM19.5 272V285L140.5 346L133.5 360.5L430.5 502L454.5 448.5C474.5 453.5 516.8 463 526 461L348 379L341 396L331 370.5L173 297L190.5 341.5L381 431.5L373.5 443L19.5 272Z"
          fill="url(#paint0_linear_3_10)"
        />
        <path
          d="M561 181.5L509.5 313L581 346.5C593.4 276.9 577 210.5 561 181.5Z"
          fill="url(#paint1_linear_3_10)"
        />
        <path
          d="M95 103C80.6 113.4 66.5 133.5 59 151H111L95 103Z"
          fill="url(#paint2_linear_3_10)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_10"
            x1="25.3903"
            y1="330.5"
            x2="604.626"
            y2="333.431"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ab7e2a" />
            <stop offset="0.185" stopColor="#ab7e2a" />
            <stop offset="0.335" stopColor="#FFE170" />
            <stop offset="0.49" stopColor="#D3AE3B" />
            <stop offset="0.665" stopColor="#F0D667" />
            <stop offset="1" stopColor="#ab7e2a" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3_10"
            x1="585.357"
            y1="264"
            x2="509.5"
            y2="264"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AB8945" />
            <stop offset="0.2" stopColor="#EFD365" />
            <stop offset="0.4" stopColor="#D5B23E" />
            <stop offset="0.6" stopColor="#FADA69" />
            <stop offset="0.8" stopColor="#ab7e2a" />
            <stop offset="1" stopColor="#ab7e2a" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3_10"
            x1="111"
            y1="127"
            x2="59"
            y2="127"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AB8945" />
            <stop offset="0.2" stopColor="#EFD365" />
            <stop offset="0.4" stopColor="#D5B23E" />
            <stop offset="0.6" stopColor="#FADA69" />
            <stop offset="0.8" stopColor="#AA8139" />
            <stop offset="1" stopColor="#AA8139" />
          </linearGradient>
        </defs>
      </SvgWrapper>

      <div className="flex flex-col items-start justify-start leading-none [&>*]:text-[20px] [&>*]:font-semibold">
        <p className="text-primary">Viso Way</p>
        <p className="text-black/50">Consultancy</p>
      </div>
    </div>
  );
};

export default Logo;
