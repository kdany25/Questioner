import joi from "@hapi/joi";

const rsvp = [
  {
    id: 1,
    meetup: 3,
    user: 4,
    respo: " lorem ipsumasd",
  },
];

export const createrRsvp = (req, res) => {
  const schema = joi.object().keys({
    meetup: joi.required(),
    user: joi.required(),
    respo: joi.string().required(),
  });
  const result = schema.validate(req.body)
  if (result.error){
    res.status(400).send(result.error)

    return
  }

  const rs = {
    id: rsvp.length + 1,
    meetup: req.body.meetup,
    user: req.body.user,
    respo: req.body.respo,
  };
  try {
    rsvp.push(rs);
    res.send({
      status: 200,
      data: [
        {
          ...rs,
        },
      ],
    });
  } catch (error) {
    res.send({
      status: "error",
      error: [
        {
          error,
        },
      ],
    });
  }
};

export const getallresponse = (req, res) => {
  try {
    res.send({
      status: 200,
      data: [...rsvp],
    });
  } catch (error) {
    res.send({
      status: "error",
      error: [
        {
          error,
        },
      ],
    });
  }
};

export const deletersvp = (req, res) => {
  const rs = rsvp.find((me) => me.id === parseInt(req.params.id));

  if (!rs) res.status(404).send("there is no such rsvp ");
  const index = rsvp.indexOf(rs);
  rsvp.splice(index, 1);
  try {
    res.send({
      status: 200,
      data: " rsvp is deleted successful",
    });
  } catch (error) {
    res.send({
      status: "error",
      error: [
        {
          error,
        },
      ],
    });
  }
};

export const getepcificRsvp = (req, res) => {
  const rs = rsvp.find((me) => me.id === parseInt(req.params.id));

  if (!rs) res.status(404).send("there is no such rsvp ");
  try {
    res.send({
      status: 200,
      data: [
        {
          ...rs,
        },
      ],
    });
  } catch (error) {
    res.send({
      status: "error",
      error: [
        {
          error,
        },
      ],
    });
  }
};
