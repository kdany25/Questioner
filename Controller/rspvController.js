

import rsvp from '../model/rsvp.js'



export const createrRsvp = (req, res) => {
 
  

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
