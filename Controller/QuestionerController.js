import joi from "@hapi/joi";
const question = [
  {
    id: 1,
    createdOn: "1 january ",
    createdBy: "clet",
    meetup: "chogum",
    title: "lorem",
    body: "lorem ipsum sbdhsbasd",
    votes: 23,
  },
];

export const createquestion = async (req, res) => {
  const schema = joi.object().keys({
    createdOn: joi.string().max(100).required(),
    createdBy: joi.string().max(100).required(),
    meetup: joi.string().max(100).required(),
    title: joi.string().max(100).required(),
    body: joi.string().min(15).required(),
    votes: joi().required(),
  });
  const result = schema.validate(req.body)
  if (result.error){
    res.status(400).send(result.error)

    return
  }
  const que = {
    id: question.length + 1,
    createdOn: req.body.createdOn,
    createdBy: req.body.createdBy,
    meetup: req.body.meetup,
    title: req.body.title,
    body: req.body.body,
    votes: req.body.votes,
  };

  try {
    question.push(que);
    res.send({
      status: 200,
      data: [
        {
          ...que,
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

export const getallquestion = (req, res) => {
  try {
    res.send({
      status: 200,
      data: [...question],
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

export const getspecificquestion = (req, res) => {
  const quest = question.find((me) => me.id === parseInt(req.params.id));
  if (!quest) res.status(404).send("that questiner doesnot exist");

  try {
    res.send({
      status: 200,
      data: [
        {
          ...quest,
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

export const deletequestion = (req, res) => {
  const quest = question.find((qu) => qu.id === parseInt(req.params.id));

  if (!quest) res.status(404).send("there is no such question ");
  const index = question.indexOf(quest);
  question.splice(index, 1);

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

export const upvote = (req, res) => {
  const que = question.find((q) => q.id === parseInt(req.params.id));
  if (!que) res.status(404).send("no such  ");

  que.votes = que.votes + 1;
  res.send(que);
};

export const downvote = (req, res) => {
  const que = question.find((q) => q.id === parseInt(req.params.id));
  if (!que) res.status(404).send("no such  ");

  que.votes = que.votes - 1;
  res.send(que);
};
