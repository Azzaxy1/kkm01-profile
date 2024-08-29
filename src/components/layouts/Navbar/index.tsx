import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { useRouter } from "next/router";

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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image src={Logo} alt="Logo KKM" width={60} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => {
          const path = createPath(item);
          const isActive = router.pathname === path;

          return (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className={`w-full text-base font-medium hover:text-primary hover:underline hover:underline-offset-4 ${
                  isActive ? "text-primary underline underline-offset-4" : ""
                }`}
                href={path}
                size="lg"
              >
                {item}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full font-medium hover:text-primary hover:underline hover:underline-offset-4"
              href={createPath(item)}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
