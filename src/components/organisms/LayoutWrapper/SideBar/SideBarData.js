import { ReactComponent as GlobalIcon } from "../../../../assets/Globe.svg";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import {
  AccessibleForward,
  Home,
  Person,
  SportsRounded,
} from "@mui/icons-material";
import EventIcon from "@mui/icons-material/Event";

export const SideBarData = [
  {
    link: "/",
    text: "Home",
    icon: <Home htmlColor="white" />,
  },
  {
    link: "/profile",
    text: "Profile",
    icon: <Person htmlColor="white" />,
  },
  {
    link: "/questions",
    icon: <QuestionAnswerRoundedIcon htmlColor="white" />,
    text: "Questions",
  },
  {
    link: "/challenges",
    text: "Challenges",
    icon: <SportsEsportsRoundedIcon htmlColor="white" />,
  },
  {
    link: "/events",
    text: "Events",
    icon: <EventIcon htmlColor="white" />,
  },
  {
    link: "/notifications",
    text: "Notifications",
    icon: <NotificationsRoundedIcon htmlColor="white" />,
  },
];
