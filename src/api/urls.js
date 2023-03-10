import config from "../config";

// Users
export const usersData = config.BASE_URL + "/api/users";
export const profileData = config.BASE_URL + "/api/v1/users/{id}";
export const resetUserPasswordUrl =
  config.BASE_URL + "/api/v1/auth/resetpassword";
export const storeUserTagsUrl =
  config.BASE_URL + "/api/v1/users/:userId/usertags";
export const userByIdUrl = config.BASE_URL + "/api/v1/users/:userId";
export const getUserChallengesUrl =
  config.BASE_URL + "/api/v1/users/:userId/challenges";

// Auth
export const verifyTokenUrl = config.BASE_URL + "/api/v1/auth/whoami";
export const registerUser = config.BASE_URL + "/api/users";
export const loginUser = config.BASE_URL + "/api/v1/auth/login/local";

// Questions
export const questionsByUserTagsUrl =
  config.BASE_URL + "/api/v1/questions/suggestions";
export const createQuestionUrl = config.BASE_URL + "/api/v1/questions";
export const getQuestionsUrl = config.BASE_URL + "/api/v1/questions";
export const getQuestionByIdUrl =
  config.BASE_URL + "/api/v1/questions/:questionId";
export const getUserQuestionsUrl =
  config.BASE_URL + "/api/v1/users/:userId/questions";

// Answers
export const getAnswersUrl =
  config.BASE_URL + "/api/v1/questions/:questionId/answers";
export const createAnswerUrl =
  config.BASE_URL + "/api/v1/questions/:questionId/answers";

export const createSingleAnswer =
  config.BASE_URL + "/api/v1/questions/{postId}/answers";
export const deleteSingleAnswer =
  config.BASE_URL + "/api/posts/answers/{AnswerId}";

// Comments
export const getCommentsUrl =
  config.BASE_URL + "/api/v1/questions/:questionId/answers/:answerId/comments";
export const createCommentUrl =
  config.BASE_URL + "/api/v1/questions/:questionId/answers/:answerId/comments";

// Tags
export const allTagsData = config.BASE_URL + "/api/tags";
export const singleTagData = config.BASE_URL + "/api/tags/{tagName}";
export const userTags = config.BASE_URL + "/api/v1/users/{id}/usertags";

//changPass
export const changePass = config.BASE_URL + "/api/v1/auth/resetpassword";

// votes
export const createVote =
  config.BASE_URL + "/api/v1/questions/{questionId}/answers/{answerId}/votes";
export const getVotesCount =
  config.BASE_URL +
  "/api/v1/questions/{questionId}/answers/{answerId}/votes/counts";

// Challenges
export const getChallengesUrl = config.BASE_URL + "/api/v1/challenges";
export const getChallengeByIdUrl =
  config.BASE_URL + "/api/v1/challenges/:challengeId";
export const createChallengeUrl = config.BASE_URL + "/api/v1/challenges";
