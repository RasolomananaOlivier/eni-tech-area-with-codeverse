import config from "../config";

// Users
export const usersData = config.BASE_URL + "/api/users";
export const profileData = config.BASE_URL + "/api/v1/users/{id}";
export const resetUserPasswordUrl =
  config.BASE_URL + "/api/v1/auth/resetpassword";
export const storeUserTagsUrl =
  config.BASE_URL + "/api/v1/users/:userId/usertags";

// Auth
export const verifyTokenUrl = config.BASE_URL + "/api/v1/auth/whoami";
export const registerUser = config.BASE_URL + "/api/users";
export const loginUser = config.BASE_URL + "/api/v1/auth/login/local";

// Questions
export const questionsByUserTags =
  config.BASE_URL + "/api/v1/questions/suggestions";
export const createQuestion = config.BASE_URL + "/api/v1/questions";

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
