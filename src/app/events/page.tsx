import { type Metadata } from "next";
import { PageEvents } from "./__page__/PageEvents";

export const metadata: Metadata = {
  title: "Mitobyte Events Directory",
};

const Events = () => {
  return <PageEvents />;
};

export default Events;
