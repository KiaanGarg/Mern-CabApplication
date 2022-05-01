import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Cab = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    cab_model : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    no_of_seats : {
        type : Number,
        required : true
    },
    air_conditioning : {
        type : Boolean,
        default : false
    },
    car_type : {
        type : String,
        enum : ['CNG', 'Petrol', 'Electric'],
        default : 'Petrol'
    }
})

export default mongoose.model('Cab', Cab)