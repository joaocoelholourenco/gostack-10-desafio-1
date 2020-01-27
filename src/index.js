const express = require('express');
const ProjectsController = require('./controllers/ProjectsController');
const TasksController = require('./controllers/TasksController');

const server = express();
server.use(express.json());


server.post('/projects', ProjectsController.store);
server.get('/projects', ProjectsController.index);
server.put('/projects/:id', ProjectsController.update);
server.delete('/projects/:id', ProjectsController.destroy);

server.post('/projects/:id/tasks', TasksController.store);



server.listen(3333);