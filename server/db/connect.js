// init monogoose to connect to monogoDB server
const mongoose=require("mongoose");
// our server path
// Use .env for production
const local_url="mongodb://127.0.0.1:27017/Program";

// connect with debugg

const connectDB = async ()=>{
	return mongoose.connect(local_url,{	useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
		console.log('DB connected ..')
	})
}


module.exports = connectDB;