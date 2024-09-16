import { type Metadata } from "next";
import { PageTeam } from "./__page__/PageTeam";

export const metadata: Metadata = {
  title: "Meet the crew",
};

const Team = () => {
  return <PageTeam />;
};

export default Team;
