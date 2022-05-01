import User from '../model/User.js'
import bcrypt from 'bcryptjs'

export const getAllUsers = async(req,res) => {
    try {
        // get all cabs from mongodb
        const users = await User.find()
        res.status(200).json({
            sucess: true,
            data: users // all cabs
        })
    } catch (err) {
        res.status(500).json({
            success: false
        })
    }
    
}

export const getUser = async(req, res) =>{
    try{
        const id = req.params.id
        const user = await User.findById(id)
        res.status(200).json({
            sucess: true,
            data: user // all cabs
        })
    }catch (err) {
        res.status(500).json({
            success: false
        })
    }
}

export const addUser = async(req,res) => {
    try {
        // Add new User
        const { password, ...rest } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const user = await User.create({password:hashPassword, ...rest});// all cabs
        res.status(200).json({
            success : true,
            data : user,
        }) 
    } catch (err) {
        res.status(500).json({
            success: false,
            error : err,
        })
    }
    
}

export const updateUser = async(req,res) => {
    try {
        const id = req.params.id
        const { password, ...rest } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const user = await User.findByIdAndUpdate(id, {password:hashPassword, ...rest}, {
            new : true
        })
        res.status(200).json({
            sucess: true,
            data : user // all cabs
        })
    } catch (err) {
        res.status(500).json({
            success: false
        })
    }
    
}

export const deleteUser = async(req,res) => {
    try {
        // get all cabs from mongodb
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({
            sucess: true,
            message: "User is Deleted" // all cabs
        })
    } catch (err) {
        res.status(500).json({
            success: false
        })
    }
}  
