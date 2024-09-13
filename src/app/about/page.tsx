import { type Metadata } from "next";
import { PageAbout } from "./__page__/PageAbout";

export const metadata: Metadata = {
  title: "About Us",
};

const About = () => {
  return <PageAbout />;
};

export default About;
