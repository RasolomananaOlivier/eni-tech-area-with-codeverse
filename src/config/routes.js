import CreateEvents from "../components/molecules/CreateEvents/CreateEvents";
import CreateChallengePage from "../components/CreateChallengePage/CreateChallengePage";
import HomePage from "../modules/HomePage/HomePage.component";
import Login from "../modules/Login/Login.component";
import ProfilePage from "../modules/ProfilePage/NewProfilePage/Profile.Page";
import PagesChalenges from "../modules/PagesChalenges";
import EventsPage from "../modules/EventsPage";
import QuestionPage from "../modules/QuestionsPage/QuestionsPage.component";
import Notification from "../modules/NotificationPage/NotificationPage";
import QuestionPageList from "../modules/QuestionsListPage";
import ChallengesPage from "../modules/AnswerPagesChalenges";
import CreateQuestionPage from "../modules/CreateQuestion/CreateQuestionPage";
import SearchResultPage from "../components/SearchResultPage";
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
    path: "/create-event",
    element: <CreateEvents />,
  },
  {
    title: "Create Challenge",
    path: "/create-challenge",
    element: <CreateChallengePage />,
  },
  {
    title: "Notification Page",
    path: "/notifications",
    element: <Notification />,
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
    title: "Challenge",
    path: "/challenges/:id",
    element: <ChallengesPage />,
  },
  {
    title: "Event",
    path: "/events",
    element: <EventsPage />,
  },
  {
    title: "Questions",
    path: "/questions",
    element: <QuestionPageList />,
  },
  {
    title: "Ask Question",
    path: "/ask-question",
    element: <CreateQuestionPage />,
  },
  {
    title: "Questions",
    path: "/questions/:id",
    element: <QuestionPage />,
  },
  {
    title: "Search",
    path: "/search",
    element: <SearchResultPage />,
  },
];

export default ROUTES;
