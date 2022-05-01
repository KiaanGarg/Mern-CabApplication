import Cab from '../model/Cab.js'

export const getAllCabs = async(req,res) => {
    try {
        // get all cabs from mongodb
        const cabs = await Cab.find()
        res.status(200).json({
            sucess: true,
            data: cabs // all cabs
        })
    } catch (err) {
        res.status(500).json({
            success: false
        })
    }
    
}

export const getCab = async(req, res) =>{
    try{
        const id = req.params.id
        const cab = await Cab.findById(id)
        res.status(200).json({
            sucess: true,
            data: cab // all cabs
        })
    }catch (err) {
        res.status(500).json({
            success: false
        })
    }
}

export const addCab = async(req,res) => {
    try {
        // Add new Cab

        const cab = await Cab.create(req.body);// all cabs
        res.status(200).json({
            success : true,
            data : cab,
        }) 
    } catch (err) {
        res.status(500).json({
            success: false,
            error : err,
        })
    }
    
}

export const updateCab = async(req,res) => {
    try {
        const id = req.params.id
        const cab = await Cab.findByIdAndUpdate(id, req.body, {
            new : true
        })
        res.status(200).json({
            sucess: true,
            data : cab // all cabs
        })
    } catch (err) {
        res.status(500).json({
            success: false
        })
    }
    
}

export const deleteCab = async(req,res) => {
    try {
        // get all cabs from mongodb
        const id = req.params.id
        const cab = await Cab.findByIdAndDelete(id)
        res.status(200).json({
            sucess: true,
            message: "Cab is Deleted" // all cabs
        })
    } catch (err) {
        res.status(500).json({
            success: false
        })
    }
}  
