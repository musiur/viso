import Immigration___Hero from "./_utils/immigration___hero";
import Immigration___Description from "./_utils/immigration___description";
import Comp___Accordion from "@/app/_utils/components/comp___accordion";
import Data___Australia from "./_utils/data/data___australia";
import Data___Work_Permit from "./_utils/data/data___work_permit";

const DataHub = {
  australia: Data___Australia,
  "work-permit": Data___Work_Permit,
  commingSoon: {
    title: <>Coming Soon</>,
    description: [
      <>
        This page is under construction. Please check back soon for updates.
      </>,
    ],
  },
};

const DataHubKeys = Object.keys(DataHub);

const getData = async (slug: string) => {
  let data = DataHub.commingSoon;
  if (DataHubKeys.includes(slug)) {
    data = DataHub[slug as keyof typeof DataHub];
  }
  return data;
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  return (
    <div>
      <Immigration___Hero params={params} />
      <Immigration___Description data={data} />
      <Comp___Accordion />
    </div>
  );
};

export default Page;
