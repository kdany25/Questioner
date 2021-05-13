import joi from "@hapi/joi";

const rsvpschema = joi.object().keys({
  id: joi.number().integer().min(0) ,
    meetup: joi.required(),
    user: joi.required(),
    respo: joi.string().required(),
  });

export {
    rsvpschema
}