import { UserCircle, Briefcase, Home, CheckCircle } from "lucide-react";
import Anim___FadeUp from "@/app/_utils/components/anim___fadeup";
const About___Approach = () => {
  const approaches = [
    {
      icon: <UserCircle className="w-8 h-8" />,
      title: "Personalized Consultation",
      description:
        "Understanding your career aspirations and providing bespoke advice to guide you through the work permit application process.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Expert Visa Management",
      description:
        "Handling all aspects of your visa application, ensuring compliance with immigration regulations and addressing any potential challenges.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Job Placement Services",
      description:
        "Leveraging our extensive network to connect you with job opportunities that match your skills and goals.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Relocation Support",
      description:
        "Offering comprehensive assistance with relocation logistics, including housing, cultural orientation, and settling into your new environment.",
    },
  ];

  return (
    <section className="section bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
          Our Approach
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          At Viso Way Consultancy, we pride ourselves on our client-centric
          approach. We believe that each career journey is unique, and we tailor
          our services to meet your specific needs. Our process involves:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {approaches.map((approach, index) => (
            <Anim___FadeUp
              key={index}
              delay={index * 0.25}
              className="bg-white p-4 md:p-8 rounded-lg hover:shadow-md [&>*]:text-black"
            >
              <div className="mb-4 [&>svg]:w-6 [&>svg]:h-6 h-10 w-10 flex items-center justify-center bg-primary [&>svg]:text-white rounded-full">
                {approach.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </Anim___FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About___Approach;
