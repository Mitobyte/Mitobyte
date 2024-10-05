import { Link } from "@chakra-ui/next-js";
import { Icon, LinkProps } from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";

interface FooterLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children, ...rest }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      color="white"
      display="block"
      fontWeight={700}
      textAlign="left"
      fontSize="lg"
      _hover={{
        textDecoration: "underline",
        ".icon": {
          transform: "rotate(45deg)",
        },
      }}
      {...rest}
    >
      {children}
      <Icon
        className="icon"
        height={5}
        width={5}
        ml={2}
        as={RiArrowRightUpLine}
        transition="transform 0.15s ease-in-out"
      />
    </Link>
  );
};
