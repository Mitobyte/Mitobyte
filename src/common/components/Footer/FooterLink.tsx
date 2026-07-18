import NextLink from "next/link";
import { Icon, LinkProps, Link } from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";

interface FooterLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children, ...rest }: FooterLinkProps) => {
  return (
    <Link
      color="white"
      display="block"
      fontWeight={700}
      textAlign="left"
      fontSize="lg"
      _hover={{
        textDecoration: "underline",
        "& .icon": {
          transform: "rotate(45deg)",
        },
      }}
      {...rest}
      asChild
    >
      <NextLink href={href}>
        {children}
        <Icon
          className="icon"
          height={5}
          width={5}
          ml={2}
          transition="transform 0.15s ease-in-out"
          asChild
        >
          <RiArrowRightUpLine />
        </Icon>
      </NextLink>
    </Link>
  );
};
