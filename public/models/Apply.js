/**
 * Created by Sifryd on 12/12/2015.
 */

var mongoose = require ("mongoose");

var ApplySchema = ({
    posts : [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    author : String,
    state : String
});

mongoose.model("Apply", ApplySchema);

