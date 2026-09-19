import type { IconType } from "react-icons";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineCoffee } from "react-icons/md";
import { RiBeerLine, RiCodeFill } from "react-icons/ri";
import { ROUTES } from "./routes";

export interface EventInfo {
  title: string;
  description: string;
  cadence: string;
  time: string;
  href: string;
  icon: IconType;
}

/** The four recurring core events, in display order. */
export const EVENTS: EventInfo[] = [
  {
    title: "Code & Coffee",
    description: "Informal coding and networking over morning coffee.",
    cadence: "1st Saturday each month",
    time: "9:00am to 12:00pm",
    href: ROUTES.EVENTS.CODE_AND_COFFEE,
    icon: MdOutlineCoffee,
  },
  {
    title: "Code + Brews",
    description: "The Code & Coffee format in a relaxed evening setting.",
    cadence: "3rd Wednesday each month",
    time: "5:00pm to 8:00pm",
    href: ROUTES.EVENTS.CODE_AND_BREWS,
    icon: RiBeerLine,
  },
  {
    title: "Resume Workshop",
    description:
      "Polish your resume with advice from engineers and recruiters.",
    cadence: "Once a quarter",
    time: "9:00am to 12:00pm",
    href: ROUTES.EVENTS.RESUME_WORKSHOP,
    icon: GrDocumentText,
  },
  {
    title: "Hackreation",
    description:
      "A full-day build event to create and showcase innovative projects.",
    cadence: "Twice a year",
    time: "9:00am to 4:00pm",
    href: ROUTES.EVENTS.HACKREATION,
    icon: RiCodeFill,
  },
];
