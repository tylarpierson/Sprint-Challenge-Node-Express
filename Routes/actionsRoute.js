import express from 'express';
import db from '../data/helpers/actionModel';
import { validateBody, respondWithError } from '../utils';
import { NOT_FOUND_ERROR, INPUT_ERROR, REMOVE_ERROR, PUT_ERROR } from '../Errors';

const actionsRoute = express.Router();

// gets
actionsRoute.get('/', async (req, res) => {
    try {
        const actions = await db.get();
        res.json(actions);
    } catch (e) {
        respondWithError(res);
    };
});

actionsRoute.get('/:id', async (req, res) => {
    try {
        const action = await db.get(+req.params.id);
        if (!action.notes) respondWithError(res, NOT_FOUND_ERROR);
        res.json(action);
    } catch (e) {
        respondWithError(res);
    };
});

// post
actionsRoute.post('/', async (req, res) => {
    try {
        const actionInformation = await db.insert(req.body);
        if (!req.body) respondWithError(res, INPUT_ERROR);
        res.status(201).json(actionInformation);
    } catch (e) {
        respondWithError(res);
    };
});

// delete 
actionsRoute.delete('/:id', async (req, res) => {
    try {
        const actionInformation = await db.remove(req.params.id);
        if (actionInformation === 0) respondWithError(res, NOT_FOUND_ERROR);
        res.status(200).json(actionInformation);
    } catch (e) {
        respondWithError(res);
    };
});

export default actionsRoute;