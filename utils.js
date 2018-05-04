const { DATABASE_RETRIEVAL_ERROR } = require("./Errors");

const generatePropertyChecker = property => obj =>
  typeof obj[property] !== "undefined";

const checkForTitle = body => generatePropertyChecker("title")(body);
const checkForContents = body => generatePropertyChecker("contents")(body);

const validateBody = body => checkForContents(body) && checkForTitle(body);

const respondWithError = (response, error = DATABASE_RETRIEVAL_ERROR) =>
  response.status(error.code).json(error.error);


const errHandler = (err, res) => {
  if (err.error) {
    return respondWithError(res, err);
  }
  return respondWithError(res);
};

const asyncMiddWrapper = fn => (req, res) =>
  Promise.resolve(fn(req, res)).catch(e => errHandler(e, res));
