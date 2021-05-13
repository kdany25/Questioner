import joi from '@hapi/joi'

import meetup from '../model/meetup.js'

export const createmeeting = async (req, res) => {

  
  
  const meet = {
    id: meetup.length + 1,
    createdOn: req.body.createdOn,
    location: req.body.location,
    Image: req.body.Image,
    topic: req.body.topic,
    happeningOn: req.body.happeningOn,
    tags: req.body.tags,
  };
  try {
    meetup.push(meet);
    res.send({
      status: 200,
      data: [
        {
          ...meet,
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

export const getallmeeting = (req, res) => {
  try {
    res.send({
      status: 200,
      data: [
        ...meetup
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

export const getspecificmeeting = (req, res) => {
  const meet = meetup.find((me) => me.id === parseInt(req.params.id));
  if (!meet) res.status(404).send("that meetup doesnot exist");

  try {
    res.send({
      status: 200,
      data: [
        {
          ...meet,
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

export const deleteMeeting = (req, res) => {
  const meet = meetup.find((me) => me.id === parseInt(req.params.id));

  if (!meet) res.status(404).send("there is no such meet up ");
  const index = meetup.indexOf(meet);
  meetup.splice(index, 1);
  try {
    res.send({
      status: 200,
      data: " post is deleted successful",
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





