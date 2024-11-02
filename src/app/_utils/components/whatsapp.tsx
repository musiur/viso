import Image from "next/image";
import Link from "next/link";
import whatsapp from "@/components/brands/WhatsappLogo.png";

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.me/+97470816932"
      passHref={true}
      target="_blank"
      className="fixed bottom-[40px] right-[30px] bg-white h-[60px] w-[60px] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl z-10"
    >
      <Image
        src={whatsapp}
        alt="WhatsAppLogo"
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    </Link>
  );
};

export default WhatsApp;
