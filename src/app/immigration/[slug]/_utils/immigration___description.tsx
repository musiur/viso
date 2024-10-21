import Form___Immigration from "./form___immigration";
import { Type___Data, Type___DataList, Type___DataSection } from "./data/types";
import { ReactElement } from "react";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

const Immigration___Description = ({ data }: { data: Type___Data }) => {
  return (
    <section className="container section grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      <div>
        <Form___Immigration />
      </div>
      <div className="col-span-1 xl:col-span-2">
        <article className="space-y-8">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <Description data={data} />
          <div className="space-y-8">
            {data?.sections?.map((section: Type___DataSection) => {
              return (
                <div key={section.id} className="space-y-4">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  <Description data={section} />
                  <ListItem data={section} />
                  <div className="space-y-8">
                    {section.child?.map((child: Type___DataSection) => {
                      return (
                        <div key={child.id} className="space-y-4">
                          <h4 className="text-lg font-semibold border-b text-primary">
                            {child.title}
                          </h4>
                          <Description data={child} />
                          <ListItem data={child} />
                          <div className="space-y-12 pl-4">
                            {child.child?.map(
                              (grandChild: Type___DataSection) => {
                                return (
                                  <div
                                    key={grandChild.id}
                                    className="space-y-4"
                                  >
                                    <h5 className="text-base font-semibold border-b">
                                      {grandChild.title}
                                    </h5>
                                    <Description data={grandChild} />
                                    <ListItem data={grandChild} />
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Paragraphs data={section} />
                </div>
              );
            })}
          </div>
          <Paragraphs data={data} />
          <div className="space-y-2 py-10">
            <h6 className="font-bold">Viso Way Consultancy</h6>
            <p>Doha, Qatar</p>
            <p>
              Email:{" "}
              <Link href="mailto:info@visowayconsultancy.com">
                info@visowayconsultancy.com
              </Link>
            </p>
            <p>
              Phone: <Link href="tel:+974-44131170">+974-44131170</Link>
            </p>
            <p>
              Website:{" "}
              <Link href="https://www.visowayconsultancy.com">
                www.visowayconsultancy.com
              </Link>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Immigration___Description;

const ListItem = ({ data }: { data: Type___DataSection }) => {
  if (!data?.list?.length) return null;
  return (
    <ul className="space-y-4 pl-4">
      {data?.list?.map((item: Type___DataList) => {
        const { id, title, paragraph } = item;
        return (
          <li key={id} className="flex gap-2">
            <CheckCheck className="min-w-4 min-h-4 w-4 h-4 mt-1" />
            <p>
              <span className="font-medium">{title}:</span>
              &nbsp;
              {paragraph}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const Description = ({ data }: { data: Type___DataSection | Type___Data }) => {
  if (!data?.description?.length) return null;
  return data.description?.map((description: ReactElement) => (
    <p key={description.key} className="[&>span]:font-medium">
      {description}
    </p>
  ));
};

const Paragraphs = ({ data }: { data: Type___DataSection | Type___Data }) => {
  if (!data?.paragraphs?.length) return null;
  return data.paragraphs?.map((paragraph: ReactElement) => (
    <p key={paragraph.key} className="[&>span]:font-medium">
      {paragraph}
    </p>
  ));
};
