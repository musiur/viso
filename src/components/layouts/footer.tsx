import Link from "next/link";
import Logo from "../brands/logo";
import Anim___FadeUp from "@/app/_utils/components/anim___fadeup";
import Icon___TikTok from "../icons/icon__tiktok";
import Icon___Facebook from "../icons/icon___facebook";
import Icon___Instagram from "../icons/icon___instagram";

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
    href: "/legals#privacy-policy-and-terms-of-service",
  },
  {
    id: 2,
    name: "Terms of Service",
    href: "/legals#terms-of-service",
  },
  {
    id: 3,
    name: "Cookie Policy",
    href: "/legals#cookie-policy",
  },
  {
    id: 4,
    name: "Modification of Terms",
    href: "/legals#modification-of-terms",
  },
  {
    id: 5,
    name: "Disclaimer",
    href: "/legals#disclaimer",
  },
  {
    id: 6,
    name: "Grievance Redressal Policy",
    href: "/legals#grievance-redressal-policy",
  },
];

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61567161902347&mibextid=ZbWKwL",
    icon: <Icon___Facebook />,
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.instagram.com/visowayconsultancy/profilecard/?igsh=MW9mZ3FzODVkMXQ2MA==",
    icon: <Icon___Instagram />,
  },
  {
    id: 3,
    name: "TikTok",
    href: "https://www.tiktok.com/@viso.way.consulta?_t=8qmN50C1kmn&_r=1",
    icon: <Icon___TikTok />,
  },
  // {
  //   id: 4,
  //   name: "Twitter",
  //   href: "https://www.twitter.com/visowayconsultancy",
  //   icon: <Twitter />,
  // },
];

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <Anim___FadeUp
          delay={0.1}
          key={1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div>
            <div className="mb-4 max-h-10">
              <Logo />
            </div>
            <p className="mb-4">
              Creating innovative solutions for a better tomorrow.
            </p>
            <address className="not-italic">
              P.O. Box - 11468, Zone 6 Al Maher Street, 860 Building No 13, 1st
              Floor Office Number 9.
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
