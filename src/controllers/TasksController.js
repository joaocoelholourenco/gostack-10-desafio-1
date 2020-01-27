const { projects } = require('./ProjectsController');

function store(req, res) {

    const { id } = req.params;
    const { task } = req.body;

    projects.map(project => {
        if (project.id === id) {

            if (!project.tasks) {
                project.tasks = [];
            }

            project.tasks.push(task);


        }
    })


    return res.json(projects);
}

module.exports = {
    store,
}