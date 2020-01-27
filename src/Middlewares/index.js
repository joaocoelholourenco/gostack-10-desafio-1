const { projects } = require('../controllers/ProjectsController');
var count = 0;

function checkIdExists(req, res, next) {

    const { id } = req.params;

    const project = projects.filter(project => {
        return project.id === id
    });

    console.log(project)

    if (project.length >= 1) {
        return next();
    }

    return res.status(400).send("ID Not Found")

}

function countRequests(req, res, next) {
    count++;
    console.log(`Número  de requisições:${count}`);

    return next();
}


module.exports = {
    checkIdExists,
    countRequests
};