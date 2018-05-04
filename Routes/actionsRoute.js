const express = require('express');
const db = require('../data/helpers/actionModel');
const { validateBody, respondWithError } = require('../utils');
const { NOT_FOUND_ERROR, INPUT_ERROR, REMOVE_ERROR, PUT_ERROR } = require('../Errors');

const actionsRoute = express.Router();