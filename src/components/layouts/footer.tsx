import Link from "next/link";
import Logo from "../brands/logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Anim___FadeUp from "@/app/_utils/components/anim___fadeup";

const pagesLinks = [
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Work permit",
    href: "/immigration/work-permit",
  },
  {
    id: 3,
    name: "Tourist Visa",
    href: "/immigration/tourist-visa",
  },
  {
    id: 4,
    name: "Canada Express Entry",
    href: "/immigration/canada-express-entry",
  },
  {
    id: 5,
    name: "Provincial Nominee Program",
    href: "/immigration/canada-provincial-nominee-program",
  },
  {
    id: 6,
    name: "Australia Immigration",
    href: "/immigration/australia",
  },
  {
    id: 7,
    name: "Europe Immigration",
    href: "/immigration/europe",
  },
  {
    id: 8,
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    id: 9,
    name: "Contact",
    href: "/contact",
  },
  {
    id: 10,
    name: "Blogs",
    href: "/blogs",
  },
];

const legalsLinks = [
  {
    id: 1,
    name: "Privacy Policy",
    href: "/legals/privacy-policy",
  },
  {
    id: 2,
    name: "Terms of Service",
    href: "/legals/terms-of-service",
  },
  {
    id: 3,
    name: "Cookie Policy",
    href: "/legals/cookie-policy",
  },
  {
    id: 4,
    name: "Disclaimer",
    href: "/legals/disclaimer",
  },
  {
    id: 5,
    name: "Grievance Redressal",
    href: "/legals/grievance-redressal",
  },
];

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com/visowayconsultancy",
    icon: <Facebook />,
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.instagram.com/visowayconsultancy",
    icon: <Instagram />,
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/visowayconsultancy",
    icon: <Linkedin />,
  },
  {
    id: 4,
    name: "Twitter",
    href: "https://www.twitter.com/visowayconsultancy",
    icon: <Twitter />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <Anim___FadeUp delay={0.1} key={1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 max-h-10">
              <Logo />
            </div>
            <p className="text-sm mb-4">
              Creating innovative solutions for a better tomorrow.
            </p>
            <address className="text-sm not-italic">
              123 Tech Street, Suite 456
              <br />
              San Francisco, CA 94105
              <br />
              United States
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              {pagesLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className=" text-lg font-semibold mb-4">Legals</h3>
            <ul className="space-y-2">
              {legalsLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  passHref={true}
                  className="flex items-center gap-4 hover:text-primary"
                >
                  {link.icon} {link.name}
                </Link>
              ))}
            </div>
          </div>
        </Anim___FadeUp>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} Viso Way Consultancy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
