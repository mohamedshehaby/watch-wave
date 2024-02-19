"use client";
import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar as NextUiNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { SearchIcon } from "@nextui-org/shared-icons";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { paths } from "@/app/paths";
import { usePathname } from "next/navigation";

// import Link from "next/link";

function Navbar() {
  const { user } = useCurrentUser();
  const pathName = usePathname();

  console.log(pathName);

  const menuItems = ["now_playing", "popular", "top_rated", "upcoming"];

  return (
    <NextUiNavBar isBordered>
      <NavbarContent className="sm:hidden flex-grow-0 " justify="center">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link color="foreground" href={paths.home()}>
            <p className="font-bold text-inherit">Watch Wave</p>
          </Link>
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={pathName === paths.movies(item) ? "warning" : "foreground"}
              href={paths.movies(item)}
            >
              {item.split("_").join(" ").charAt(0).toUpperCase()}
              {item.split("_").join(" ").slice(1)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" className="items-center flex-1" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name={user?.name || "User"}
              size="sm"
              src={
                user?.image
                  ? user?.image
                  : `https://i.pravatar.cc/150?u=a042581f4e29026704d`
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>

            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full flex-grow-0"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={paths.movies(item)}
              size="lg"
            >
              {item.split("_").join(" ").charAt(0).toUpperCase()}
              {item.split("_").join(" ").slice(1)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavBar>
  );
}

export default Navbar;
