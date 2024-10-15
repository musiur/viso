import CompanyImage from "../assets/company.png";
import StudyImage from "../assets/study.png";
import Comp___Sidal, { Type___CompSidalProps } from "./comp___sidal";

const About___About = () => {
  return (
    <section>
      <div className="container section space-y-16">
        {AboutData.map((item: Type___CompSidalProps) => {
          return <Comp___Sidal key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default About___About;

const AboutData: Type___CompSidalProps[] = [
  {
    id: 1,
    title: "Our Story",
    description:
      "Founded on a vision of bridging talent with opportunity, Viso Way Consultancy has spent the past ten years mastering the intricate world of international work permits. Our journey began with a simple mission: to simplify the process of working abroad and make global career dreams attainable. Over the years, we've expanded our expertise and network, becoming a trusted partner for individuals seeking to enhance their careers in some of the world's most dynamic and diverse job markets.",
    imageSrc: CompanyImage,
    reverse: false,
  },
  {
    id: 2,
    title: "Our Expertise",
    description:
      "With a decade of experience in navigating the complexities of work permits for Europe, Canada, and Australia, our team is uniquely positioned to provide you with unparalleled support. We understand the nuances of immigration laws and visa requirements in these regions, allowing us to offer tailored solutions that align with your career goals.",
    imageSrc: StudyImage,
    reverse: true,
    list: [
      "Europe: Expertise in leading industries and job opportunities available.",
      "Canada: Guidance for work permits, settlement, and career growth.",
      "Australia: Efficient work permit applications and career success support.",
    ],
  },
];
