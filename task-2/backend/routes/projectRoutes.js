import express from 'express';
import Project from '../models/projectSchema.js';
import projectData from "../data/productData.js"

const router = express.Router();

/// POST REQUEST
router.post('/', async (req, res) => {
    try {
        
        const project = new Project(projectData);
        await project.save();
        res.status(201).send(project);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET REQUEST
router.get('/projectData', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
});


export default router
