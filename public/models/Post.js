/**
 * Created by Sifryd on 12/12/2015.
 */

var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
    text: String,
    author : String,
    date: Date
});

mongoose.model("Post", PostSchema);