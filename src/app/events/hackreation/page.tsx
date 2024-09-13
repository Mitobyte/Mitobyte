import { type Metadata } from "next";
import { PageHackreation } from "./__page__/PageHackreation";

export const metadata: Metadata = {
  title: "Hackreation",
};

const Hackreation = () => {
  return <PageHackreation />;
};

export default Hackreation;
