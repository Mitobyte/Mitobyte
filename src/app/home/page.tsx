import { type Metadata } from "next";
import { PageHome as Home } from "./__page__/PageHome";

export const metadata: Metadata = {
  title: "Home Page",
};

const PageHome = () => {
  return <Home />;
};

export default PageHome;
