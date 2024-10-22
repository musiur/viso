import { ArticleRenderer } from "../immigration/[slug]/_utils/immigration___description";
import Data___Legals from "./_utils/data___legals";

const getData = async () => {
  return Data___Legals;
};

const Legals = async () => {
  const data = await getData();
  return (
    <div className="container hero-section">
      <ArticleRenderer data={data} />
    </div>
  );
};

export default Legals;
