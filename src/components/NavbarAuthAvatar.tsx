import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Spinner,
} from "@nextui-org/react";
import { paths } from "@/app/paths";
import { signOut } from "next-auth/react";

function NavbarAuthAvatar() {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (!user) {
    return (
      <Button href={paths.auth()} as={Link} color="primary" variant="shadow">
        Sign In
      </Button>
    );
  }

  return (
    <Dropdown backdrop="blur" className="flex-shrink-0" placement="bottom-end">
      <DropdownTrigger className="flex-shrink-0">
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

        <DropdownItem
          onClick={() => {
            void signOut({
              callbackUrl: paths.home(),
            });
          }}
          key="logout"
          color="danger"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default NavbarAuthAvatar;
