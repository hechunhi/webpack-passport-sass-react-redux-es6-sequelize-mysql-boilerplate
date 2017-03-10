export const UPDATE_PEERS_IN_SESSION = "updatePeersInSession";
export const UPDATE_USERID = "updateuserId";
export const REPLACE_QUESTIONS = "replaceQuestions";
export const REPLACE_ANSWERS = "replaceAnswers";
export const ADD_QUESTIONS = "addQuestions";
export const ADD_ANSWERS = "addAnswers";
export const UPDATE_SESSION_DEADLINE = "updateSessionDeadline";


export function updateSessionDeadline(newDeadLine) {
  return {
    type: UPDATE_SESSION_DEADLINE,
    data: newDeadline,
  };
}

export function addAnswers(answers) {
  return {
    type: ADD_ANSWERS,
    data: answers,
  };
}

export function addQuestions(qs) {
  return {
    type: ADD_QUESTIONS,
    data: qs,
  };
}

export function replaceAnswers(newAnswers) {
  return {
    type: REPLACE_ANSWERS,
    data: newAnswers,
  };
}

export function replaceQuestions(newQs) {
  return {
    type: REPLACE_QUESTIONS,
    data: newQs,
  };
}

export function updateUserId(userId) {
  return {
    type: UPDATE_USERID,
    data: userId,
  };
}

export function updateSessionPeers(peers, sessionId) {
  return {
    type: UPDATE_PEERS_IN_SESSION,
    data: {
      peers,
      sessionId,
    }
  };
}