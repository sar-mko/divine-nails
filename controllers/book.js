// const Book = require('../models/BookedAppts')

module.exports = {
createAppointment: async (req, res)=>{
    try{
        if(!req.body.choices){
            res.render('booking.ejs', {err: 'please choose at least one option'})
        }
        // await Book.create({
        //     fName: req.body.fName, 
        //     lName: req.body.lName, 
        //     email: req.body.email, 
        //     number: Number(req.body.number), 
        //     services: req.body.choices, 
        //     comments: req.body.comments, 
        //     bookId: req.body.time
        // })
        res.render('confirmation.ejs', {date: req.body.time, fName: req.body.fName, services: req.body.choices, email: req.body.email})
        
    }catch(err){
        console.log(err)
    }
},
confirmAppointment: async (req,res)=>{
    console.log(req.body.choices)
    console.log(req.body)
    res.render('confirmation.ejs')
},

}