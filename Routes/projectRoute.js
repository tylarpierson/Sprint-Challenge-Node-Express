import express from 'express';
import db from '../data/helpers/projectModel';
import { validateBody, respondWithError } from '../utils';
import { NOT_FOUND_ERROR, INPUT_ERROR, REMOVE_ERROR, PUT_ERROR } from '../Errors';

const projectRoute = express.Router();

// gets
projectRoute.get('/', async (req, res) => {
    try {
        const projects = await db.get();
        res.json(projects);
    } catch (e) {
        respondWithError(res);
    }
});

projectRoute.get('/:id', async (req, res) => {
    try {
         const project = await db.get(req.params.id);
         console.log(project);
         if (!project.length) respondWithError(res, NOT_FOUND_ERROR);
         res.json(project);
    } catch (e) {
        respondWithError(res);
    };     
});

projectRoute.get('/:id/actions', async (req, res) => {
    try {
         const project = await db.getProjectActions(req.params.id);
         console.log(actions);
         if (!project.length) respondWithError(res, NOT_FOUND_ERROR);
         res.json(project);
    } catch (e) {
        respondWithError(res);
    };
});
