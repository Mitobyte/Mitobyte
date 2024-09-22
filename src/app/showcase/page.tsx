import { type Metadata } from "next";
import { PageShowcase } from "./__page__/PageShowcase";

export const metadata: Metadata = {
  title: "Community Projects",
};

const Privacy = () => {
  return <PageShowcase />;
};

export default Privacy;
