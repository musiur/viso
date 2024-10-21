import Form___Immigration from "./form___immigration";
import { Type___Data, Type___DataList, Type___DataSection } from "./data/types";
import { ReactElement } from "react";
import { CheckCheck } from "lucide-react";

const Immigration___Description = ({ data }: { data: Type___Data }) => {
  return (
    <section className="container section grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      <div>
        <Form___Immigration />
      </div>
      <div className="col-span-1 xl:col-span-2">
        <article className="space-y-8">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          {data.description.map((item: ReactElement) => (
            <p key={item.key}>{item}</p>
          ))}
          <div className="space-y-8">
            {data?.sections?.map((section: Type___DataSection) => {
              return (
                <div key={section.id} className="space-y-4">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  {section.description?.map((description: ReactElement) => (
                    <p key={description.key} className="[&>span]:font-medium">
                      {description}
                    </p>
                  ))}
                  <div className="space-y-4 pl-4">
                    {section.list?.map((listItem: Type___DataList) => {
                      return (
                        <p key={listItem.id}>
                          <span className="text-lg font-bold">
                            {listItem.title}
                          </span>
                          {listItem.paragraph}
                        </p>
                      );
                    })}
                  </div>
                  <div className="space-y-8">
                    {section.child?.map((child: Type___DataSection) => {
                      return (
                        <div key={child.id} className="space-y-4">
                          <h4 className="text-lg font-semibold border-b text-primary">
                            {child.title}
                          </h4>
                          {child.description?.map(
                            (childDescription: ReactElement) => (
                              <p
                                key={childDescription.key}
                                className="[&>span]:font-medium"
                              >
                                {childDescription}
                              </p>
                            )
                          )}
                          <div className="space-y-4 pl-4">
                            {child.list?.map(
                              (childListItem: Type___DataList) => {
                                return (
                                  <p key={childListItem.id}>
                                    <span className="text-lg font-medium">
                                      {childListItem.title}
                                    </span>
                                    {childListItem.paragraph}
                                  </p>
                                );
                              }
                            )}
                          </div>
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
                                    {grandChild.description?.map(
                                      (grandChildDescription: ReactElement) => (
                                        <p
                                          key={grandChildDescription.key}
                                          className="[&>span]:font-medium"
                                        >
                                          {grandChildDescription}
                                        </p>
                                      )
                                    )}
                                    <ul className="space-y-4 pl-4">
                                      {grandChild.list?.map(
                                        (
                                          grandChildListItem: Type___DataList
                                        ) => {
                                          return (
                                            <li
                                              key={grandChildListItem.id}
                                              className="flex gap-2"
                                            >
                                              <CheckCheck className="min-w-4 min-h-4 w-4 h-4 mt-1" />
                                              <p>
                                                <span className="font-medium">
                                                  {grandChildListItem.title}:
                                                </span>
                                                &nbsp;
                                                {grandChildListItem.paragraph}
                                              </p>
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {data.paragraphs?.map((item) => {
            return (
              <p key={item.key} className="[&>span]:font-bold">
                {item}
              </p>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Immigration___Description;
