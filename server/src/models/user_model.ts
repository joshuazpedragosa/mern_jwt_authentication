import { db } from './../config/database';

const schem = db.Schema;

const user_schema = new schem({
    first_name : {type : String, null : false, require : true},
    last_name : {type : String, null : false, require : true},
    email : {type : String, null : false, require : true},
    password : {type : String, null : false, require : true}
});

const user_model = db.model('users', user_schema);

export const userModel = user_model;