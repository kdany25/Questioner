import joi from "@hapi/joi"

const questionschema = joi.object().keys({
  
    id : joi.number().integer().min(0) ,
    createdOn: joi.string().max(100).required(),
    createdBy: joi.string().max(100).required(),
    meetup: joi.string().max(100).required(),
    title: joi.string().max(100).required(),
    body: joi.string().min(15).required(),
    votes: joi.number().integer().min(0)

  })
  export {
    questionschema 
  }

