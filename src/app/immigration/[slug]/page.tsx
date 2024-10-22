import Immigration___Hero from "./_utils/immigration___hero";
import Immigration___Description from "./_utils/immigration___description";
import Comp___Accordion from "@/app/_utils/components/comp___accordion";
import Data___Australia from "./_utils/data/data___australia";
import Data___Work_Permit from "./_utils/data/data___work_permit";
import Data___Tourist from "./_utils/data/data___tourist";
import Data___Europe from "./_utils/data/data___europe";
import Data___Canada_Express_Entry from "./_utils/data/data___canada_express_entry";
import Data___Canada_Provincial_Nominee_Program from "./_utils/data/data___canada_provincial_nominee_program";


const DataHub = {
  europe: Data___Europe,
  "canada-express-entry": Data___Canada_Express_Entry,
  "canada-provincial-nominee-program": Data___Canada_Provincial_Nominee_Program,
  australia: Data___Australia,
  "work-permit": Data___Work_Permit,
  "tourist-visa": Data___Tourist,
  commingSoon: {
    title: <>Coming Soon</>,
    description: [
      <>This page is under construction. Please check back soon for updates.</>,
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

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const data = await getData(params.slug);
  let MetadataTitle = "Immigration";
  let MetadataDescription = "Viso Way Consultancy. Acheieve your destiny.";

  MetadataTitle = data?.title?.props?.children;
  MetadataDescription = data?.description[0]?.props?.children
    .toString()
    .replaceAll(
      "[object Object]",
      data?.description[0]?.props?.children[1]?.props?.children
    );
  return {
    title: MetadataTitle,
    description: MetadataDescription,
  };
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
