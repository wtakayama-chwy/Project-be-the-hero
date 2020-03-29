const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate'); // For validations

const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');
const routes = express.Router();

// Creating a Session (LogIn)
    routes.post('/sessions', celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }), SessionController.create); 

// ONGS
    routes.get('/ongs', OngController.index);
    // '/ongs' = resource = entity on db (sqlite3)
    routes.post('/ongs', celebrate({
        [Segments.BODY]: Joi.object().keys({ // Must be BODY validation (Insomnia - POST ONGs)
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().min(10).max(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),        
        })
    }), OngController.create); // Must come before the creation of your ONG

// PROFILE
    routes.get('/profile', celebrate({
        [Segments.HEADERS]: Joi.object({ // Must be HEADERS validation (Insomnia - GET Profile)
            authorization: Joi.string().required(),
        }).unknown(),
    }), ProfileController.index);

// INCIDENTS
    routes.get('/incidents', celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(), // Not required - BE CAREFUL while using required()
        })
    }), IncidentController.index);

    routes.post('/incidents', celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required(),
        }),
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
    }) ,IncidentController.create);

    routes.delete('/incidents/:id', celebrate({ 
        [Segments.PARAMS]: Joi.object().keys({ // Must be PARAMS validation ID (Insomnia - DELETE Incidents)
            id: Joi.number().required(),
        })
    }), IncidentController.delete);

module.exports = routes;