import { DATABASE_RETRIEVAL_ERROR } from "./Errors";

const respondWithError = (response, error = DATABASE_RETRIEVAL_ERROR) =>
  response.status(error.code).json(error.error);

export { validateBody, respondWithError };

export const errHandler = (err, res) => {
  if (err.error) {
    return respondWithError(res, err);
  }
  return respondWithError(res);
};

export const asyncMiddWrapper = fn => (req, res) =>
  Promise.resolve(fn(req, res)).catch(e => errHandler(e, res));
