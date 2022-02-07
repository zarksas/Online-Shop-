const res = require('express/lib/response')
const Review = require('../models/Review.model')
module.exports.reviewsControllers = {
    deleteReviews: async(req, res) => {
        await Review.findByIdAndRemove(req.params.id)
        res.json('Рецензии удалены')
    }   
}


