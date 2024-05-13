module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getLandingPage: (req,res)=>{
        res.render('main.ejs')
    },
    getServicesPage: async (req,res) => {
        res.render('services.ejs')
    },
    getBookingPage: async (req,res) => {
        res.render('booking.ejs', {err: false})
    }

}