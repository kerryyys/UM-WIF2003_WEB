import express from 'express';
import { User } from '../models/users.js';

const router=express.Router();
//add data
router.post('/',async(request,response)=>{
    try{
        if(
            !request.body.firstName,
            !request.body.lastName,
            !request.body.city,
            !request.body.state,
            !request.body.role

        ){
            return response.status(400).send({
                message:'Send all required fields'
            });
        }
        const newUser={
            firstName: request.body.firstName,
            lastName:request.body.lastName,
            city:request.body.city,
            state:request.body.state,
            role:request.body.role
        };
        const user=await User.create(newUser);
    

        return response.status(201).send(user);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }


})
//retrieve all data
router.get('/',async(request,response)=>{
    try{
    
        const user=await User.find({});
    

        return response.status(200).json({
            count:user.length,
            data:user
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }


})
//retrieve by id
router.get('/:id',async(request,response)=>{
    try{
    
        const {id} =request.params;
        const user=await User.findById(id);

        return response.status(200).json({
            count:user.length,
            data:user
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

// Endpoint to fetch a specific experience by userId and experienceId
router.get('/:userId/experience/:experienceId', async (req, res) => {
    const { userId, experienceId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        const experience = user.experience.id(experienceId);
        if (!experience) {
            return res.status(404).send('Experience not found');
        }

        res.status(200).json(experience);
    } catch (error) {
        console.error('Error fetching experience:', error);
        res.status(500).send('Internal server error');
    }
});

//update 
router.put('/:id',async(request,response)=>{
    try{
        if(
            !request.body.firstName,
            !request.body.lastName,
            !request.body.city,
            !request.body.state,
            !request.body.role

        ){
            return response.status(400).send({
                message:'Send all required fields'
            });
        }
        const{id}=request.params;
        const result= await User.findByIdAndUpdate(id,request.body);
        console.log("result", result)

        if(!result){
            return response.status(404).json({message:'Book not found'});
        }
        return response.status(200).send({message:'Information updated successfully'});

        
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

router.put('/:id/addExperience', async (req, res) => {
    const { id } = req.params;
    const newExperience = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.experience.push(newExperience); // Add the new experience to the experiences array
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        console.error('Error adding new experience:', error);
        res.status(500).send('Internal server error');
    }
});

router.put('/:userId/editExperience/:experienceId', async (req, res) => {
    const { userId, experienceId } = req.params;
    const updatedExperience = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        const experienceIndex = user.experience.findIndex(exp => exp._id.toString() === experienceId);
        if (experienceIndex === -1) {
            return res.status(404).send('Experience not found');
        }

        user.experience[experienceIndex] = { ...user.experience[experienceIndex].toObject(), ...updatedExperience };
        await user.save();
        
        res.status(200).send(user);
    } catch (error) {
        console.error('Error updating experience:', error);
        res.status(500).send('Internal server error');
    }
});


export default router;