import { MessageSquare } from "lucide-react";
import Link from "next/link";

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.me/+97470816932"
      passHref={true}
      target="_blank"
      className="fixed bottom-[40px] right-[30px] group border border-primary/50 bg-primary hover:bg-primary/70 h-[60px] w-[60px] rounded-full flex items-center justify-center hover:shadow-2xl z-10"
    >
      <MessageSquare className="w-[40px] h-[40px] stroke-white stroke-[1.6px]" />
    </Link>
  );
};

export default WhatsApp;
