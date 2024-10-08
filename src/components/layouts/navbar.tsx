"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "../ui/button";
import Logo from "../brands/logo";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ICON___EU from "../icons/eu";
import ICON___Kangaru from "../icons/kangaru";
import ICON___LeafCanada from "../icons/leaf-canada";

type Type___NavLink_GrandChild = {
  id: number;
  href?: string;
  title: string;
  desciption?: string;
  icon?: React.ReactElement;
  childrens?: {
    id: number;
    href?: string;
    title: string;
    desciption?: string;
    icon?: React.ReactElement;
  }[];
};

type Type___NavLink_Child = {
  id: number;
  href?: string;
  title: string;
  desciption?: string;
  icon?: React.ReactElement;
  childrens?: Type___NavLink_GrandChild[];
};

type Type___NavLink = {
  id: number;
  href?: string;
  title: string;
  childrens?: Type___NavLink_Child[];
  desciption?: string;
  icon?: React.ReactElement;
};

const Navbar = () => {
  return (
    <header className="border-b bg-white/50 backdrop-blur-md z-50 sticky top-0 py-2">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden min-[1024px]:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NavLinks.map((link: Type___NavLink) => {
                return (
                  <NavigationMenuItem key={link.id}>
                    {link?.childrens?.length ? (
                      <React.Fragment>
                        <NavigationMenuTrigger>
                          {link.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NavMenus link={link} />
                        </NavigationMenuContent>
                      </React.Fragment>
                    ) : (
                      <Link href={link.href || "#"} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button className="hidden min-[1024px]:flex">
          Book a Consultation
        </Button>
        <div className="flex items-center gap-4 min-[1024px]:hidden">
          <Drawer>
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  <Logo />
                </DrawerTitle>
              </DrawerHeader>
              <div className="max-h-[60vh] overflow-y-auto">
                <div className="flex flex-col gap-4 p-4">
                  {NavLinks.map((link: Type___NavLink) => {
                    return (
                      <div key={link.id}>
                        {link?.childrens?.length ? (
                          <NavMenus link={link} />
                        ) : (
                          <Link href={link.href || "#"} legacyBehavior passHref>
                            {link.title}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-[280px] sm:w-[400px] pl-4 grid grid-cols-1 gap-2 pb-10">
                <Button>Book a Consultation</Button>
                <DrawerFooter className="p-0">
                  <DrawerClose>
                    <Button variant="outline" className="w-full">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const NavMenus = ({ link }: { link: Type___NavLink_Child }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 w-[280px] sm:w-[400px] p-0 sm:p-6">
      {link?.childrens?.map((parent: Type___NavLink) => {
        return (
          <li key={parent.id}>
            {!parent?.childrens?.length ? (
              <Link
                href={parent?.href || ""}
                className="text-sm font-medium flex items-center gap-2 hover:text-primary transition duration-300 ease-linear"
              >
                {parent.title}{" "}
                <ArrowUpRight className="w-4 h-4 stroke-gray-400" />
              </Link>
            ) : (
              <p className="text-sm font-medium flex items-center gap-2">
                {parent.title}
              </p>
            )}
            <p className="text-sm text-muted-foreground">{parent.desciption}</p>
            <div className="flex flex-col gap-2 pt-2">
              {parent?.childrens?.map((child: Type___NavLink) => {
                return child?.childrens?.length ? (
                  <ChildLink key={child.id} child={child} />
                ) : (
                  <Link
                    href={child.href || "#"}
                    legacyBehavior
                    passHref
                    key={child.id}
                  >
                    <ChildLink child={child} />
                  </Link>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const ChildLink = ({ child }: { child: Type___NavLink_Child }) => {
  return (
    <div
      className={
        "flex items-start justify-start gap-4 py-2 px-3 rounded-xl transition duration-300 ease-linear hover:bg-gray-100"
      }
    >
      <div className="min-w-10 h-10 rounded-lg bg-white flex items-center justify-center mt-1 [&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-primary shadow">
        {child.icon || <X />}
      </div>
      <div className="flex flex-col items-start justify-start">
        {!child?.childrens?.length ? (
          <Link
            href={child?.href || ""}
            className="text-sm font-medium flex items-center gap-2 hover:text-primary transition duration-300 ease-linear"
          >
            {child.title} <ArrowUpRight className="w-4 h-4 stroke-gray-400" />
          </Link>
        ) : (
          <p className="text-sm font-medium flex items-center gap-2">
            {child.title}
          </p>
        )}
        <p className="text-sm text-muted-foreground">{child.desciption}</p>
        {child?.childrens?.length ? (
          <ul className="flex flex-col gap-2 pt-2">
            {child?.childrens?.map((grandChild: Type___NavLink_GrandChild) => {
              return (
                <li key={grandChild.id}>
                  <Link
                    href={grandChild.href || "#"}
                    className="flex items-center gap-2 hover:text-primary transition duration-300 ease-linear"
                  >
                    {grandChild.title}{" "}
                    <ArrowUpRight className="w-4 h-4 stroke-gray-400" />
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

const NavLinks: Type___NavLink[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Immigration",
    childrens: [
      {
        id: 1,
        title: "Immigration",
        desciption:
          "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
        childrens: [
          {
            id: 1,
            title: "Europe",
            desciption:
              "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
            href: "/immigration/europe",
            icon: <ICON___EU />,
          },
          {
            id: 2,
            title: "Australia",
            desciption:
              "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
            href: "/immigration/australia",
            icon: <ICON___Kangaru />,
          },
          {
            id: 3,
            title: "Canada",
            desciption:
              "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
            icon: <ICON___LeafCanada />,
            childrens: [
              {
                id: 1,
                title: "Express Entry",
                desciption:
                  "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
                href: "/immigration/canada-express-entry",
              },
              {
                id: 2,
                title: "Provincial Nominee Program",
                desciption:
                  "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
                href: "/immigration/canada-provincial-nominee-program",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Work Permit (Only Europe)",
        desciption:
          "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
        href: "/immigration/work-permit",
      },
      {
        id: 3,
        title: "Tourist VISA (All Countries)",
        desciption:
          "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
        href: "/immigration/tourist-visa",
      },
    ],
  },
  {
    id: 3,
    title: "About",
    href: "/about",
  },
  {
    id: 4,
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
];
