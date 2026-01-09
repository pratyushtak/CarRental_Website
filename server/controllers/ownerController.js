import User from "../models/User.js";
import Car from "../models/Car.js";
import fs from 'fs'
import imagekit from "../configs/imageKit.js";

// API to change role of User
export const changeRoleToOwner = async (req, res)=>{
    try {
        const {_id } = req.user;

        await User.findByIdAndUpdate(_id, {role: "owner"});
        res.json({success: true,
            message: "Now you can list cars"
        })
    } catch (error) {
        console.log(error.message)
        res.json({
                success: false,
                message: error.message
            })
    }
}

// API to list Car
export const addCar = async (req, res) =>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.CarData);
        const imageFile = req.file; //Added image in req in middleware by multer

        
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/cars"
        });
        // response.url is also url  but we need a optimized one
        var optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { width: "1280" },
                { quality: "auto" },
                { format: "webp" }
            ]
        });
        const image = optimizedImageUrl;
        await Car.create({...car, owner: _id, image})

        res.json({success: true, message: "Car Added"});


    } catch (error) {
        console.log(error.message)
        res.json({
                success: false,
                message: error.message
            })
    }
}

// API to List Cars
export const getOwnerCars = async (req, res)=>{
    try {
        const { _id } = req.user;
        const cars = await Car.find({owner: _id});
        res.json({success: true, cars});
    } catch (error) {
        console.log(error.message)
        res.json({
                success: false,
                message: error.message
            })
    }
}

// API to toggle car availability
export const toggleCarAvailability = async(req, res)=>{
    try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById(carId);

        if(car.owner.toString()!==_id.toString()){
            return res.json({
                success: false,
                message: "Unautorized"
            })
        }

        car.isAvailable = !car.isAvailable;
        await car.save();


        res.json({success: true, cars});
    } catch (error) {
        console.log(error.message)
        res.json({
                success: false,
                message: error.message
            })
    }
}

// API to delete a car
export const deleteCar = async(req, res)=>{
    try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById(carId);

        if(car.owner.toString()!==_id.toString()){
            return res.json({
                success: false,
                message: "Unautorized"
            })
        }

        car.owner = null;
        car.isAvailable = false;

        await car.save();


        res.json({success: true, message: "Car removed"});
    } catch (error) {
        console.log(error.message)
        res.json({
                success: false,
                message: error.message
            })
    }
}

// API to get Dashboard data
export const getDashboardData = async (req, res)=>{
    try {
        const {_id, role} = req.user;

        if(role !== 'owner'){
            return res.json({
                success: false,
                message: "Unauthorized"
            })
        }

        const cars = await Car.find({owner: _id})
    } catch (error) {
        console.log(error.message)
        res.json({
                success: false,
                message: error.message
            })
    }
}