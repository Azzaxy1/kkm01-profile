import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import images from "@/assets/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const menuItems: string[] = [
    "Home",
    "Program Kerja",
    "Struktur Anggota",
    "Tentang Kami",
  ];

  const createPath = (item: string): string => {
    if (item.toLowerCase() === "home") {
      return "/";
    }

    return `/${item.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-secondary sticky">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="/">
            <Image src={images.Logo} alt="Logo KKM" width={60} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => {
          const path: string = createPath(item);
          const isActive: boolean = router.pathname === path;

          return (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                className={`w-full text-base text-white font-medium hover:text-primary hover:underline hover:underline-offset-4 ${
                  isActive &&
                  "text-primary underline underline-offset-4 font-semibold"
                }`}
                href={path}
              >
                {item}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => {
          const path: string = createPath(item);
          const isActive: boolean = router.pathname === path;

          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full text-base font-medium hover:text-primary hover:underline hover:underline-offset-4 ${
                  isActive &&
                  "text-primary underline underline-offset-4 font-bold"
                }`}
                href={path}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
