const Accommodations = require('../models/accommodations.model')
const Places = require('../models/places.model')

const getAllAccommodations = async() => {
    const data = await Accommodations.findAll({
        include: {
            model: Places,
            attributes:{
                exclude: ['createdAt', 'updatedAt'] 
            }
        },
        attributes:{
            exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
        }
    })
    return data
}

const getAccommodationById = async (id) => {
    const data = await Accommodations.findOne({
        where: {
            id
        },
        include: {
            model: Places,
            attributes:{
                exclude: ['createdAt', 'updatedAt'] 
            }
        },
        attributes:{
            exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
        }
    })
    return data
}


module.exports = {
    getAllAccommodations,
    getAccommodationById
}