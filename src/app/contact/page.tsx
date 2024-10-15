import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import Form___Contact from "../_utils/components/form___contact";
import Link from "next/link";

const Page = () => {
  return (
    <section className="container py-40">
      <div className="max-w-xl mx-auto py-10 flex flex-col justify-center items-center gap-4 [&>*]:text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Book a consultation</h2>
        <p>
          We are here to help you with your immigration needs. We are a team of
          experienced immigration consultants who are dedicated to helping you
          with your immigration needs.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Form___Contact />
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-primary font-semibold">Call us now</h4>
            <p>Call our team any time, we are available 24/7 </p>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +1 (234) 567-8900
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-primary font-semibold">Chat with us</h4>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@example.com
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> +1 (234) 567-8900
                (WhatsApp)
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-primary font-semibold">Social Media</h4>
            <p>Reach out to us on our social media platforms</p>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="#"
                className="p-2 rounded-lg hover:bg-primary text-primary bg-primary/10 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg hover:bg-primary text-primary bg-primary/10 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg hover:bg-primary text-primary bg-primary/10 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <h4 className="text-primary font-semibold">Visit us</h4>
            <p>Chat to use in person</p>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Duha, Qatar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
