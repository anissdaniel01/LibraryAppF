var mongoose=require("mongoose")
var schema= mongoose.Schema;

var bookschema=new mongoose.Schema({
    Title:String,
    Genre:{type:String,required:true, default:"E001"},
    Auther:String
})
var bookModel=mongoose.model("bookModel", bookschema,"book")

module.exports=bookModel;