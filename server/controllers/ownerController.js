import User from "../models/User.js";

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
        const imageFile = req.file; //Added image in req in middleware

        
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/cars"
        });


    } catch (error) {
        console.log(error.message)
        res.json({
                success: false,
                message: error.message
            })
    }
}
