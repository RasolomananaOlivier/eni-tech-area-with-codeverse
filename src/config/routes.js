import CreateEvents from "../components/molecules/CreateEvents/CreateEvents";
import CreateChallengePage from "../components/CreateChallengePage/CreateChallengePage";
import HomePage from "../modules/HomePage/HomePage.component";
import Login from "../modules/Login/Login.component";
import ProfilePage from "../modules/ProfilePage/NewProfilePage/Profile.Page";
import PagesChalenges from "../modules/PagesChalenges";
import EventsPage from "../modules/EventsPage";
import QuestionPage from "../modules/QuestionsPage/QuestionsPage.component";

// test
const ROUTES = [
  {
    title: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    title: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    title: "Create Event",
    path: "/events/create",
    element: <CreateEvents />,
  },
  {
    title: "Profile",
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    title: "Challenge",
    path: "/challenges",
    element: <PagesChalenges />,
  },
  {
    title: "Event",
    path: "/events",
    element: <EventsPage />,
  },
  {
    title: "Questions",
    path: "/questions",
    element: <QuestionPage />,
  },
];

export default ROUTES;
