import { type Metadata } from "next";
import { PageCodeAndCoffee } from "./__page__/PageCodeAndCoffee";

export const metadata: Metadata = {
  title: "Code & Coffee",
};

const CodeAndCoffee = () => {
  return <PageCodeAndCoffee />;
};

export default CodeAndCoffee;
