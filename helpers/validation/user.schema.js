import joi from '@hapi/joi'

const schema = joi.object().keys({
  
    id : joi.number().integer().min(0) ,
    firstname: joi.string().max(100).required(),
    lastname: joi.string().max(100).required(),
    othername: joi.string().max(100).required(),
    email: joi.string().max(100).required(),
    phonenumber: joi.string().max(13).required(),
    username: joi.string().max(100).required(),
    registered: joi.string().max(100).required(),
    password: joi.string().max(20).required()
  })

  export {
   schema
   
}