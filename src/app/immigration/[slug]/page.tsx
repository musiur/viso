import Immigration___Hero from "./_utils/immigration___hero";
import Immigration___Description from "./_utils/immigration___description";
import Comp___Accordion from "@/app/_utils/components/comp___accordion";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <Immigration___Hero params={params} />
      <Immigration___Description />
      <Comp___Accordion />
    </div>
  );
};

export default Page;
