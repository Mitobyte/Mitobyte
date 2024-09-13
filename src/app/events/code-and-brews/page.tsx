import { type Metadata } from "next";
import { PageCodeAndBrews } from "./__page__/PageCodeAndBrews";

export const metadata: Metadata = {
  title: "Code + Brews",
};

const CodeAndBrews = () => {
  return <PageCodeAndBrews />;
};

export default CodeAndBrews;
