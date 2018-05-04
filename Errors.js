const INPUT_ERROR = {
  error: { message: "Please provide name and description of project." },
  code: 400
};

const SAVE_ERROR = {
  error: {
    message: "There was an error while saving the project to the database."
  },
  code: 500
};

const GET_ERROR = {
  error: { message: "The projects information could not be retrieved." },
  code: 500
};

const NOT_FOUND_ERROR = {
  error: { message: "The project with the specified ID does not exist." },
  code: 404
};

const DATABASE_RETRIEVAL_ERROR = {
  error: { message: "The project information could not be retrieved." },
  code: 500
};

const PUT_ERROR = {
  error: { message: "The project information could not be modified" },
  code: 500
};

const REMOVE_ERROR = {
  error: { message: "The project could not be removed." },
  code: 500
};


