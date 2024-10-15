import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Type___AccordionItem = {
  value: string;
  trigger: string;
  content: string;
};

export default function Comp___Accordion({
  data = defaultData,
  title = "Frequently Asked Questions",
  description = "Here are some of the most frequently asked questions by our clients.",
}: {
  data?: Type___AccordionItem[];
  title?: string;
  description?: string;
}) {
  return (
    <section className="container section space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {data.map((item: Type___AccordionItem) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="font-medium text-left">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

const defaultData: Type___AccordionItem[] = [
  {
    value: "item-1",
    trigger: "What is the purpose of this website?",
    content:
      "This website is a platform for our clients to learn more about us and our services.",
  },
  {
    value: "item-2",
    trigger: "How do I book a consultation?",
    content:
      "You can book a consultation by filling out the booking form or contacting us directly.",
  },
  {
    value: "item-3",
    trigger: "What services do you offer?",
    content:
      "We offer a wide range of services including legal immigration processing, required documents support, and more.",
  },
  {
    value: "item-4",
    trigger: "How long does the immigration process take?",
    content:
      "The immigration process can take anywhere from a few months to several years, depending on the type of visa and the country of origin.",
  },
  {
    value: "item-5",
    trigger: "Do you provide consultation services?",
    content:
      "Yes, we offer consultation services to help you understand the immigration process and answer any questions you may have.",
  },
  {
    value: "item-6",
    trigger: "Can I apply for immigration on my own?",
    content:
      "Yes, you can apply for immigration on your own, but it's recommended to seek the help of a professional to ensure a smooth process.",
  },
  {
    value: "item-7",
    trigger: "What are the requirements for immigration?",
    content:
      "The requirements for immigration vary depending on the country and type of visa you're applying for. Our experts can guide you through the process.",
  },
  {
    value: "item-8",
    trigger: "How much does the immigration process cost?",
    content:
      "The cost of the immigration process varies depending on the type of visa, country, and services required. We can provide you with a detailed estimate.",
  },
  {
    value: "item-9",
    trigger: "Do you have a success guarantee?",
    content:
      "We have a high success rate in immigration applications, but we cannot guarantee success as it ultimately depends on the decision of the immigration authorities.",
  },
  {
    value: "item-10",
    trigger: "How do I track the status of my application?",
    content:
      "You can track the status of your application through our online portal or by contacting our customer support team.",
  },
];
