const { projects } = require('./ProjectsController');

function store(req, res) {

    const { id } = req.params;
    const { title } = req.body;

    projects.map(project => {
        if (project.id === id) {

            if (!project.tasks) {
                project.tasks = [];
            }

            project.tasks.push(title);


        }
    })


    return res.json(projects);
}

module.exports = {
    store,
}