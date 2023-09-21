import mongoose from "mongoose"
import validator from "validator"

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter  name"],
        minlength: 3,
        maxlength: 20,
        trim: true

    },

    email: {
        type: String,
        required: [true, "Please add the contact email"],
        unique: [true, "Email address already taken"],
        validate:{
             validator:validator.isEmail,
            message:"Please provide a valid email"
        }
    },


    password: {
        type: String,
        required: [true, "Please add user password"],
        minlength: 3,

    },

     lastName: {
        type: String,
        required: [true, "Please enter  name"],
        minlength: 3,
        maxlength: 20,
        trim: true,
        default: 'lastName'

    },

    location: {
        type: String,
        required: [true, "Please enter  name"],
        minlength: 3,
        maxlength: 20,
        trim: true,
        default: 'Lagos'
    }


},{
    timestamps: true,
})

export default mongoose.model('User', UserSchema)