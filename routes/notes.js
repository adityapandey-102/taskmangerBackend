const express =require('express');
const router = express.Router();
const Notes = require('../models/Notes');



//ROUTE 1 :Get all the notes using:  GET "/api/auth//fetchAllNotes"
router.get('/fetchAllNotes',async(req,res)=>{
    try {
        const notes=await Notes.find()
        res.json(notes)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error ocurred");
    }
})

//ROUTE 2 :Add all the notes using:  POST "/api/notes/addNotes"
router.post('/addNotes',async(req,res)=>{

    try {
        
        const {title,description,tag,categorie,timeToComplete,timeDone}=req.body;
    
        //Creating new note....
    
        const note=new Notes({
            title, description, tag,categorie,timeToComplete,timeDone
        })
    
        const savedNote=await note.save();
        console.log("note added")
        res.send(savedNote)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error ocurred");
    }

})


//ROUTE 3 :Update your the notes using:  POST "/api/notes/updateNotes"
router.put('/updateNotes/:id',async(req,res)=>{

    try { 
        const {title,description,tag,categorie,timeToComplete,timeDone}=req.body;
    
        //Creating new note....
    
        const newNote={}
        if(title){newNote.title=title};
        if(description){newNote.description=description};
        if(tag){newNote.tag=tag};
        if(categorie){newNote.categorie=categorie};
        if(timeToComplete){newNote.timeToComplete=timeToComplete};
        if(timeDone){newNote.timeDone=timeDone};
    //Find by id and update notes
        console.log(req.params.id);
        const note=await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}

        const updatedNotes = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json({updatedNotes})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error ocurred");
    }

})


//ROUTE 4 :Delete your the notes using: DELETE "/api/notes/deleteNotes/:id".
router.delete('/deleteNotes/:id',async(req,res)=>{

    try {
    
    //Find by id and delete it
        let note=await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"sucess":"Note has been deleted",note:note})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error ocurred");
    }

})

module.exports=router