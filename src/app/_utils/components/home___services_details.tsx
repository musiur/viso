import {
  Briefcase,
  Globe,
  LifeBuoy,
  Truck,
  Trophy,
  Settings,
} from "lucide-react";
import Anim___FadeUp from "./anim___fadeup";

type Type___ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
};

const Home___ServicesDetails = () => {
  return (
    <section className="section bg-muted">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ServicesData.map((item) => {
          return (
            <Anim___FadeUp
              key={item.id}
              delay={item.id * 0.1}
              className="space-y-4 p-4 md:p-8 rounded-xl border border-white bg-white hover:bg-primary transition-all duration-500 ease-in-out group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary [&>svg]:stroke-white [&>svg]:group-hover:stroke-primary  group-hover:bg-muted">
                {item.icon}
              </div>
              <h3 className="text-normal md:text-lg font-semibold text-gray-700 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-base text-gray-700 group-hover:text-white">
                {item.description}
              </p>
            </Anim___FadeUp>
          );
        })}
      </div>
    </section>
  );
};

export default Home___ServicesDetails;

const ServicesData: Type___ServiceItem[] = [
  {
    id: 1,
    title: "Seamless Work Permit Solutions",
    description:
      "Navigating the complexities of international work permits can be challenging. At Viso Way Consultancy, we provide expert assistance in securing the appropriate visas for your desired destination. Our knowledgeable team ensures that your application process is smooth, efficient, and tailored to meet your specific needs.",
    icon: <Briefcase />,
  },
  {
    id: 2,
    title: "Expansive Global Network",
    description:
      "Our extensive network of employers and industry connections spans across Europe, Australia, the UK, and Canada. We offer access to a diverse range of job opportunities in multiple sectors, from technology and finance to healthcare and hospitality. Let us help you find the perfect match for your skills and career goals.",
    icon: <Globe />,
  },
  {
    id: 3,
    title: "Personalized Support and Guidance",
    description:
      "From the moment you reach out to us, you'll receive personalized support from our experienced consultants. We take the time to understand your career ambitions and provide tailored advice, ensuring a seamless transition to your new role and location. Our comprehensive services include job placement, visa assistance, and relocation support.",
    icon: <LifeBuoy />,
  },
  {
    id: 4,
    title: "Comprehensive Relocation Services",
    description:
      "Relocating to a new country involves much more than obtaining a work permit. Viso Way Consultancy offers end-to-end relocation services, including housing assistance, local orientation, and cultural integration. Our goal is to make your move as effortless and enjoyable as possible, allowing you to focus on your new career.",
    icon: <Truck />,
  },
  {
    id: 5,
    title: "Proven Success",
    description:
      "Our client's success stories reflect our commitment to excellence. From securing positions in bustling European cities to starting new careers in the picturesque landscapes of Australia and Canada, Viso Way Consultancy has a track record of helping professionals achieve their dreams.",
    icon: <Trophy />,
  },
  {
    id: 6,
    title: "Comprehensive Services",
    description:
      "At Viso Way Consultancy, we offer a comprehensive suite of services designed to support your international career transition. From work permit and visa assistance to job placement, relocation support, career counseling, and ongoing support, we ensure a smooth and successful transition to your new role and location.",
    icon: <Settings />,
  },
];
