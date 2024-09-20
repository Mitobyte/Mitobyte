import { type Metadata } from "next";
import { PageProjects } from "./__page__/PageProjects";

export const metadata: Metadata = {
  title: "Community Projects",
};

const Privacy = () => {
  return <PageProjects />;
};

export default Privacy;
