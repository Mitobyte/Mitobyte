import { Link } from "@chakra-ui/next-js";
import { Icon, LinkProps } from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";

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
      {...rest}
    >
      {children}
      <Icon height={5} width={5} ml={2} as={LuArrowUpRight} />
    </Link>
  );
};
