import joi from "@hapi/joi";

const meetupschema = joi.object().keys({
  id: joi.number().integer().min(0),
  createdOn: joi.string().max(100).required(),
  location: joi.string().max(100).required(),
  Image: joi.string().max(100).required(),
  topic: joi.string().min(10).required(),
  happeningOn: joi.string().max(100).required(),
  tags: joi.string().max(100).required(),
});

export { meetupschema };
