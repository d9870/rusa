//> to route path / , /api/v1/task
// use express router to route api path
// connect it to app.js by exporting 

// init's
const express=require("express");
const router=express.Router();
const { createProgram , getProgram , getAllProgram , editProgram , removeProgram } = require("../controllers/program"); // import function from controller

// Test
router.route("/").get( async (req,res)=>{
	let testData = await require("../db/data.json")
	res.json(testData)
	// res.json({"name":"Piyush"})
});
//> CRUD 

// Create
router.route("/").post(createProgram);
// Read
// router.route("/").get(getAllProgram);
// Read Single
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