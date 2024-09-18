import { type Metadata } from "next";
import { PageResumeWorkshop } from "./__page__/PageResumeWorkshop";

export const metadata: Metadata = {
  title: "Resume Workshop",
};

const ResumeWorkshop = () => {
  return <PageResumeWorkshop />;
};

export default ResumeWorkshop;
