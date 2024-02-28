import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarItem,
} from "@nextui-org/react";
import { paths } from "@/app/paths";
import { usePathname } from "next/navigation";
import { ChevronDown } from "@nextui-org/shared-icons";

function NavbarDropdown({
  title,
  menuItems,
}: {
  title: string;
  menuItems: string[];
}) {
  const pathName = usePathname();

  return (
    <Dropdown backdrop="blur">
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            endContent={<ChevronDown fill="currentColor" size={16} />}
            radius="sm"
            variant="light"
          >
            {title}
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
              color={"foreground"}
              href={
                title === "Movies" ? paths.movies(item) : paths.tvShows(item)
              }
              size="lg"
            >
              {item.split("_").join(" ").charAt(0).toUpperCase()}
              {item.split("_").join(" ").slice(1)}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default NavbarDropdown;
