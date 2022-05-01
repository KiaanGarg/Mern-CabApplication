import mongoose from 'mongoose'

const Schema = mongoose.Schema

const User = new Schema({
    name : {
        type : String,
        required : true
    },
    qualification : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }
})

export default mongoose.model('User', User)