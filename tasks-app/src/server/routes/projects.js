const express = require('express');
var router = express.Router();
const Projects = require('../models/projects');


//Get all products
router.get('/', function(req, res, next){
    Projects.find().then(projlist => {
        res.json(projlist);
    })
    
})

//Create a Project
router.post('/', function(req, res, next){
    console.log("REQUEST",req.body);
    const project = new Projects(req.body);
    project.save().then(project => {
        res.json("PROJECT ADDED");
    })
    .catch(err => {
        res.status(400).json("Error while creating the Project");
    });
});

router.put('/:pid', function(req, res){
    const pid = req.params.pid;
    console.log(req.body)
	Projects.findOneAndUpdate({
		'pid': pid
	}, req.body, function (err, task) {
		if (err) res.status(500).json(err);
		res.json('Task updated successfully!');
	});
});


//get a product
router.get('/:pid', function(req, res){
    const pid = req.params.pid;
    const query = Projects.find({'pid':pid}, function(err, project){
        res.json(project);
    });
})

//delete a product
router.delete('/:pid', function(req, res){
    Projects.findOneAndRemove(
        {'pid': req.params.pid},
        function(err, project) {
            if(err) res.json(err);
            else res.json('Successfully removed project');
        }
    )
})

module.exports = router;