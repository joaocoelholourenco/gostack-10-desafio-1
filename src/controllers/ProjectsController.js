var projects = [{ id: "2", title: "Desafio 1", tasks: ["criação API"] },];

function store(req, res) {
    const { id, title } = req.body;
    const Project = { id, title };
    projects.push(Project);

    return res.json(projects);
}

function index(req, res){
    return res.json(projects);
}

function update(req, res){
    const {id} = req.params;
    const {title} = req.body;

    projects.map(project =>{
        if(id===project.id){
            project.title = title;
        }
    });
    return res.json(projects);
}

function destroy(req, res){
    const {id} = req.params;
     const response  = projects.filter((project)=>{
        return project.id !== id;
    })
    projects = response;

    return res.json(response);
}

module.exports = {
    store,
    index,
    update,
    destroy,
    projects
};