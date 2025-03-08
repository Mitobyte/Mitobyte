import { ROUTES } from "@/config/routes";
import {
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { LogoSmallMitobyte } from "../Logos/LogoSmallMitobyte";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const MenuLinks = () => {
  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          backgroundColor={"white"}
          rightIcon={<ChevronDownIcon />}
        >
          <LogoSmallMitobyte />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Events">
            <MenuItem>
              <Link href={ROUTES.EVENTS.CODE_AND_COFFEE}>Code and Coffee</Link>
            </MenuItem>
            <MenuItem>
              <Link href={ROUTES.EVENTS.CODE_AND_BREWS}>Code and Brews</Link>
            </MenuItem>
            <MenuItem>
              <Link href={ROUTES.EVENTS.HACKREATION}>Hackreation</Link>
            </MenuItem>
            <MenuItem>
              <Link href={ROUTES.EVENTS.RESUME_WORKSHOP}>Resume Workshops</Link>
            </MenuItem>
            <MenuItem>
              <Link href={ROUTES.EXTERNAL.GOOGLE_CALENDAR} target="_blank">
                Google Calendar
              </Link>
            </MenuItem>
            <MenuGroup title="Sponsorships">
              <MenuItem>
                <Link href={ROUTES.EXTERNAL.HACK_CLUB} target="_blank">
                  Donate
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={ROUTES.SPONSORS}>Sponsorship Information</Link>
              </MenuItem>
            </MenuGroup>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};
