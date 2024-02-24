"use client";
import React from "react";
import { ChevronDown } from "@nextui-org/shared-icons";

import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar as NextUiNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { paths } from "@/app/paths";
import { usePathname } from "next/navigation";
import NavbarAuthAvatar from "@/components/NavbarAuthAvatar";

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
};

function Navbar() {
  const pathName = usePathname();

  const menuItems = ["now_playing", "popular", "top_rated", "upcoming"];

  return (
    <NextUiNavBar isBordered>
      <NavbarContent className="sm:hidden flex-grow-0 " justify="center">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand className="flex-grow-0 flex-shrink-1">
          <Link color="foreground" href={paths.home()}>
            <p className="font-bold text-inherit">Watch Wave</p>
          </Link>
        </NavbarBrand>

        <Dropdown backdrop="blur">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Movies
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="Movies"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {menuItems.map((item, index) => (
              <DropdownItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    pathName === paths.movies(item) ? "warning" : "foreground"
                  }
                  href={paths.movies(item)}
                  size="lg"
                >
                  {item.split("_").join(" ").charAt(0).toUpperCase()}
                  {item.split("_").join(" ").slice(1)}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Badge content="soon" color="danger" size="sm">
            <Link isDisabled color="foreground" href="#">
              TV Shows
            </Link>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Badge content="soon" color="danger" size="sm">
            <Link isDisabled color="foreground" href="#">
              Torrent Search
            </Link>
          </Badge>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center flex-1" justify="end">
        {/*  <Input*/}
        {/*    classNames={{*/}
        {/*      base: "max-w-full sm:max-w-[10rem] h-10",*/}
        {/*      mainWrapper: "h-full",*/}
        {/*      input: "text-small",*/}
        {/*      inputWrapper:*/}
        {/*        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",*/}
        {/*    }}*/}
        {/*    placeholder="Type to search..."*/}
        {/*    size="sm"*/}
        {/*    startContent={<SearchIcon />}*/}
        {/*    type="search"*/}
        {/*  />*/}

        <NavbarAuthAvatar />
      </NavbarContent>

      <NavbarMenu>
        <NavbarBrand className="flex-grow-0 flex-shrink-1">
          <Link color="foreground" href={paths.home()}>
            <p className="font-bold text-inherit">Watch Wave</p>
          </Link>
        </NavbarBrand>

        <Dropdown backdrop="blur">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Movies
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="Movies"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {menuItems.map((item, index) => (
              <DropdownItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    pathName === paths.movies(item) ? "warning" : "foreground"
                  }
                  href={paths.movies(item)}
                  size="lg"
                >
                  {item.split("_").join(" ").charAt(0).toUpperCase()}
                  {item.split("_").join(" ").slice(1)}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Badge content="soon" color="danger" size="sm">
            <Link isDisabled color="foreground" href="#">
              TV Shows
            </Link>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Badge content="soon" color="danger" size="sm">
            <Link isDisabled color="foreground" href="#">
              Torrent Search
            </Link>
          </Badge>
        </NavbarItem>
      </NavbarMenu>
    </NextUiNavBar>
  );
}

export default Navbar;
