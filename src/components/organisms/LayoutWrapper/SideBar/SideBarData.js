import { ReactComponent as GlobalIcon } from "../../../../assets/Globe.svg";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { AccessibleForward, Person } from "@mui/icons-material";
import EventIcon from "@mui/icons-material/Event";

export const SideBarData = [
  {
    link: "/questions",
    icon: <QuestionAnswerRoundedIcon htmlColor="white" />,
    text: "Questions",
  },
  {
    link: "/tags",
    text: "Tags",
    icon: <StyleRoundedIcon htmlColor="white" />,
  },
  {
    link: "/profile",
    text: "profile",
    icon: <Person htmlColor="white" />,
  },
  {
    link: "/Event",
    text: "Event",
    icon: <EventIcon htmlColor="white" />,
  },
  {
    link: "/users",
    text: "Users",
    icon: <PeopleAltRoundedIcon htmlColor="white" />,
  },
  {
    link: "/notifications",
    text: "Notifications",
    icon: <NotificationsRoundedIcon htmlColor="white" />,
  },
  {
    link: "/challenge",
    text: "Chalenges",
    icon: <AccessibleForward htmlColor="white" />,
  },
];
