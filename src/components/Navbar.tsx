"use client";
import React from "react";

import {
  Badge,
  Link,
  Navbar as NextUiNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { paths } from "@/app/paths";
import NavbarAuthAvatar from "@/components/NavbarAuthAvatar";
import NavbarDropdown from "@/components/NavbarDropdown";

function Navbar() {
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

        <NavbarDropdown
          title="Movies"
          menuItems={[
            "trending",
            "now_playing",
            "popular",
            "top_rated",
            "upcoming",
          ]}
        />
        <NavbarDropdown
          title="Series"
          menuItems={[
            "trending",
            "on_the_air",
            "popular",
            "top_rated",
            "airing_today",
          ]}
        />

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

        <NavbarDropdown
          title="movies"
          menuItems={[
            "trending",
            "now_playing",
            "popular",
            "top_rated",
            "upcoming",
          ]}
        />
        <NavbarDropdown
          title="Series"
          menuItems={[
            "trending",
            "on_the_air",
            "popular",
            "top_rated",
            "airing_today",
          ]}
        />

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
