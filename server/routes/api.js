//> to route path / , /api/v1/task
// use express router to route api path
// connect it to app.js by exporting 

// init's
const express=require("express");
const router=express.Router();
const { createProgram , getProgram , getAllProgram , editProgram , removeProgram } = require("../controllers/program"); // import function from controller

//> router paths
// router.route("/").get((req,res)=>{ res.send("tasks ...") })

//> CRUD 

// send/create tasks
// app.post('/api/v1/tasks',(req,res)=>{})
router.route("/").post(createProgram);
// get/fetch tasks
// /api/v1/task - get all task
// router.route("/").get(getAllProgram);
router.route("/").get(getAllProgram);
// /api/v1/task/:id - get single task
router.route("/:id").get(getProgram);
// update/edit task
// app.patch('/api/v1/tasks/:id',(req,res)=>{})
router.route("/:id").patch(editProgram);
// delete task
// app.delete('/api/v1/tasks/:id',(req,res)=>{})
router.route("/:id").delete(removeProgram);

module.exports = router;

/* N O T E S

*/