import { ROUTES } from "@/config/routes";
import { Link, Menu, Button, Box, Portal } from "@chakra-ui/react";
import { LogoSmallMitobyte } from "../Logos/LogoSmallMitobyte";
import { LuChevronDown } from "react-icons/lu";

export const MenuLinks = () => {
  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button backgroundColor={"white"}>
            <LogoSmallMitobyte />
            <LuChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Events</Menu.ItemGroupLabel>
                <Menu.Item value="item-0">
                  <Link href={ROUTES.EVENTS.CODE_AND_COFFEE}>
                    Code and Coffee
                  </Link>
                </Menu.Item>
                <Menu.Item value="item-1">
                  <Link href={ROUTES.EVENTS.CODE_AND_BREWS}>
                    Code and Brews
                  </Link>
                </Menu.Item>
                <Menu.Item value="item-2">
                  <Link href={ROUTES.EVENTS.HACKREATION}>Hackreation</Link>
                </Menu.Item>
                <Menu.Item value="item-3">
                  <Link href={ROUTES.EVENTS.RESUME_WORKSHOP}>
                    Resume Workshops
                  </Link>
                </Menu.Item>
                <Menu.Item value="item-4">
                  <Link href={ROUTES.EXTERNAL.GOOGLE_CALENDAR} target="_blank">
                    Google Calendar
                  </Link>
                </Menu.Item>
                <Menu.ItemGroup>
                  <Menu.ItemGroupLabel>Sponsorships</Menu.ItemGroupLabel>
                  <Menu.Item value="item-5">
                    <Link href={ROUTES.EXTERNAL.HACK_CLUB} target="_blank">
                      Donate
                    </Link>
                  </Menu.Item>
                  <Menu.Item value="item-6">
                    <Link href={ROUTES.SPONSORS}>Sponsorship Information</Link>
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};
