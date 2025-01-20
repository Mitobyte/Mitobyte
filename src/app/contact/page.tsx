import { type Metadata } from "next";
import { PageContact } from "./__page__/PageContact";

export const metadata: Metadata = {
  title: "Contact Us",
};

const CodeOfConduct = () => {
  return <PageContact />;
};

export default CodeOfConduct;
