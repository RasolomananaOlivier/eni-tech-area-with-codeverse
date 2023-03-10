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

// Posts
export const questionsByUserTags =
  config.BASE_URL + "/api/v1/questions/suggestions";

// Answers
export const allAnswersData =
  config.BASE_URL + "/api/v1/questions/{questionId}/answers";
export const allAnswersComment =
  config.BASE_URL +
  "/api/v1/questions/{questionId}/answers/{answerId}/comments";

export const createSingleAnswer =
  config.BASE_URL + "/api/v1/questions/{postId}/answers";
export const deleteSingleAnswer =
  config.BASE_URL + "/api/posts/answers/{AnswerId}";

// Comments
export const allCommentsData = config.BASE_URL + "/api/posts/comments/{id}";
export const createSingleComment =
  config.BASE_URL + "/api/posts/comments/{postId}";
export const deleteSingleComment =
  config.BASE_URL + "/api/posts/comments/{CommentId}";

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
