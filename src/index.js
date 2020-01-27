const express = require('express');
const ProjectsController = require('./controllers/ProjectsController');
const TasksController = require('./controllers/TasksController');
const Middlewares = require('./Middlewares');

const server = express();
server.use(express.json());

server.use(Middlewares.countRequests)

server.post('/projects', ProjectsController.store);
server.get('/projects', ProjectsController.index);
server.put('/projects/:id', Middlewares.checkIdExists, ProjectsController.update);
server.delete('/projects/:id', Middlewares.checkIdExists, ProjectsController.destroy);

server.post('/projects/:id/tasks', Middlewares.checkIdExists,TasksController.store);



server.listen(3333);