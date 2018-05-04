const express = require('express');
const db = require('../data/helpers/projectModel');
const { validateBody, respondWithError } = require('../utils');
const { NOT_FOUND_ERROR, INPUT_ERROR, REMOVE_ERROR, PUT_ERROR } = require('../Errors');

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

// post
projectRoute.post('/', async (req, res) => {
    const projectInformation = await db.insert(req.body);
    console.log(projectInformation);
    try {
        if (!validateBody(body)) {
            respondWithError(INPUT_ERROR);
            return;
        }
        res.status(201).json(projectInformation);
    } catch (e) {
        respondWithError(res);
    }
});

// put 
projectRoute.put('/:id', async (req, res) => {
    try {
        const projectInformation = await db.update(req.params.id, req.body);
        console.log(projectInformation);
        if (!validateBody(body)) {
            respondWithError(res, INPUT_ERROR);
            return;
        }
        if (Number(response) === 0) {
            respondWithError(res, NOT_FOUND_ERROR);       
        }
        res.json(projectInformation);
    } catch (e) {
        respondWithError(res, PUT_ERROR);
    }
});

// delete 
projectRoute.delete('/:id', async (req, res) => {
    try {
        const projectInformation = await db.remove(req.params.id);
        console.log(projectInformation);
        if (response === 0) {
            respondWithError(res, NOT_FOUND_ERROR);
            return;
        }
        res.json(projectInformation);
    } catch (e) {
        respondWithError(res, REMOVE_ERROR);
    }
});

