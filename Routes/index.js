import express, { Router } from 'express';
import projectRoute from './projectRoute';
import actionsRoute from './actionsRoute';

const mainRouter = Router({ mergeParams: true });

// projects
mainRouter.use('/projects', projectRoute);

// actions
mainRouter.use('/actions', actionsRoute);

export default mainRouter;