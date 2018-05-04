const express = require('express');
const Router = express.Router();
const projectRoute = require('./projectRoute');
const actionsRoute = require('./actionsRoute');

const mainRouter = Router({ mergeParams: true });

// projects
mainRouter.use('/projects', projectRoute);

// actions
mainRouter.use('/actions', actionsRoute);

