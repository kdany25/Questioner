

import {schema} from './user.schema'

import {rsvpschema} from './rsvp.schema'

import {meetupschema} from './meet.schema' 

import {questionschema} from './question.schema'



const  addUserValidation = async (req,res,next)=> {
    const value = await schema.validate(req.body)
    if (value.error){

        res.json({
            success : 0 ,
            message : value.error.details[0].message
        })
    } else {
        next();


    }
}

const  rsvpvalidation = async (req,res,next)=> {
    const value = await rsvpschema.validate(req.body)
    if (value.error){

        res.json({
            success : 0 ,
            message : value.error.details[0].message
        })
    } else {
        next();


    }
}
const  meetvalidation = async (req,res,next)=> {
    const value = await meetupschema.validate(req.body)
    if (value.error){

        res.json({
            success : 0 ,
            message : value.error.details[0].message
        })
    } else {
        next();


    }
}

const  questionvalidation = async (req,res,next)=> {
    const value = await questionschema.validate(req.body)
    if (value.error){

        res.json({
            success : 0 ,
            message : value.error.details[0].message
        })
    } else {
        next();


    }
}


export {
    addUserValidation , rsvpvalidation , meetvalidation , questionvalidation
}

