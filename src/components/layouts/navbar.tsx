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

import Logo from "../brands/logo";
import { ArrowUpRight, Menu, X } from "lucide-react";
import clsx from "clsx";
import { ShinyButton } from "../ui/shiny-button";
import ICON___FlagEU from "../icons/flag__eu";
import ICON___FlagAustralia from "../icons/flag__australia";
import ICON___FlagCanada from "../icons/flag__canada";

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
    <header className="fixed top-5 w-full z-50 px-4">
      <nav className="container mx-auto flex items-center justify-between border-b bg-white/70 backdrop-blur-md z-50 p-2 rounded-2xl border-white/80 shadow-lg">
        <Logo />
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
                        <NavigationMenuContent className="p-0">
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
        <Link href="/contact">
          <ShinyButton className="hidden min-[1024px]:flex">
            Book a Consultation
          </ShinyButton>
        </Link>
        <div className="flex items-center gap-4 min-[1024px]:hidden">
          <Drawer>
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="shadow-lg">
                <DrawerTitle>
                  <Logo />
                </DrawerTitle>
              </DrawerHeader>
              <div className="h-[60vh] overflow-y-auto">
                <div className="flex flex-col gap-4 p-4 pt-8">
                  {NavLinks.map((link: Type___NavLink) => {
                    return (
                      <div key={link.id}>
                        {link?.childrens?.length ? (
                          <NavMenus link={link} scope={true} />
                        ) : (
                          <DrawerClose asChild>
                            <Link
                              href={link?.href || ""}
                              className="text-sm font-medium flex items-center gap-2 hover:text-primary transition duration-300 ease-linear"
                            >
                              {link.title}{" "}
                              <ArrowUpRight className="w-4 h-4 stroke-gray-400" />
                            </Link>
                          </DrawerClose>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="p-4 flex flex-col items-center justify-center gap-2 pb-10 shadow-[0px_-10px_10px_0px_#00000010] h-auto">
                  <Link href="/contact">
                    <ShinyButton className="w-full">
                      Book a Consultation
                    </ShinyButton>
                  </Link>
                  <DrawerFooter className="p-0 w-full">
                    <DrawerClose asChild>
                      <div className="w-full h-9 flex items-center justify-center px-4 border rounded-lg sm:cursor-pointer">
                        Close
                      </div>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const NavMenus = ({
  link,
  scope = false,
}: {
  link: Type___NavLink_Child;
  scope?: boolean;
}) => {
  return (
    <ul className="grid grid-cols-1 gap-4 p-0 sm:p-6 w-full min-[1024px]:w-[400px]">
      {link?.childrens?.map((parent: Type___NavLink) => {
        return (
          <li key={parent.id}>
            {!parent?.childrens?.length ? (
              scope ? (
                <DrawerClose asChild>
                  <Link
                    href={parent?.href || ""}
                    className="text-sm font-medium flex items-center gap-2 hover:text-primary transition duration-300 ease-linear"
                  >
                    {parent.title}{" "}
                    <ArrowUpRight className="w-4 h-4 stroke-gray-400" />
                  </Link>
                </DrawerClose>
              ) : (
                <Link
                  href={parent?.href || ""}
                  className="text-sm font-medium flex items-center gap-2 hover:text-primary transition duration-300 ease-linear"
                >
                  {parent.title}{" "}
                  <ArrowUpRight className="w-4 h-4 stroke-gray-400" />
                </Link>
              )
            ) : (
              <p className="text-sm font-medium flex items-center gap-2">
                {parent.title}
              </p>
            )}
            <p className="text-sm text-muted-foreground">{parent.desciption}</p>
            <div className="flex flex-col gap-2 pt-2">
              {parent?.childrens?.map((child: Type___NavLink) => {
                return child?.childrens?.length ? (
                  <ChildLink key={child.id} child={child} scope={scope} />
                ) : scope ? (
                  <DrawerClose key={child.id} asChild>
                    <ChildLink child={child} scope={scope} />
                  </DrawerClose>
                ) : (
                  <ChildLink key={child.id} child={child} scope={scope} />
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const ChildLink = ({
  child,
  scope = false,
}: {
  child: Type___NavLink_Child;
  scope?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "flex items-start justify-start gap-3 py-2 px-3 rounded-xl transition duration-300 ease-linear bg-gray-100",
        {
          "mb-8 pb-4": child?.childrens?.length,
          "pb-2": !child?.childrens?.length,
        }
      )}
    >
      <div className="min-w-10 h-auto rounded-lg bg-white flex items-center justify-center mt-1 [&>svg]:w-8 [&>svg]:h-8 [&>svg]:stroke-primary shadow">
        {child.icon || <X />}
      </div>
      <div className="flex flex-col items-start justify-start">
        {!child?.childrens?.length ? (
          scope ? (
            <DrawerClose asChild>
              <Link
                href={child?.href || ""}
                className="text-sm font-medium flex items-center gap-2 hover:text-primary transition duration-300 ease-linear"
              >
                {child.title}{" "}
                <ArrowUpRight className="w-4 h-4 stroke-gray-400" />
              </Link>
            </DrawerClose>
          ) : (
            <Link
              href={child?.href || ""}
              className="text-sm font-medium flex items-center gap-2 hover:text-primary transition duration-300 ease-linear"
            >
              {child.title} <ArrowUpRight className="w-4 h-4 stroke-gray-400" />
            </Link>
          )
        ) : (
          <p className="text-sm font-medium flex items-center gap-2">
            {child.title}
          </p>
        )}
        {child?.desciption ? (
          <p className="text-sm text-muted-foreground">{child.desciption}</p>
        ) : null}
        {child?.childrens?.length ? (
          <ul className="flex flex-col gap-2 pt-2">
            {child?.childrens?.map((grandChild: Type___NavLink_GrandChild) => {
              return (
                <li key={grandChild.id}>
                  <Link
                    href={grandChild.href || "#"}
                    className="flex items-center gap-2 hover:text-primary transition duration-300 ease-linear text-sm"
                  >
                    - {grandChild.title}{" "}
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
            icon: <ICON___FlagEU className="w-8 h-8" />,
          },
          {
            id: 2,
            title: "Australia",
            desciption:
              "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
            href: "/immigration/australia",
            icon: <ICON___FlagAustralia className="w-8 h-8" />,
          },
          {
            id: 3,
            title: "Canada",
            desciption:
              "Lorem ipsum dolor sit amet elit sed do. sit amet elit sed do.",
            icon: <ICON___FlagCanada className="w-8 h-8" />,
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
