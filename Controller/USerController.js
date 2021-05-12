import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import joi  from '@hapi/joi' 
const user = [
  {
    id: 1,
    firstname: "iyamuremye",
    lastname: "david",
    othername: "dav",
    email: "dav@gmail.com",
    phonenumber: "0788898978",
    username: "dav",
    registered: "12 january 2019",
    password: "dfhjfdhsafsbf"
  }
];

export const createuser = async (req, res) => {
  const schema = joi.object().keys({
    firstname: joi.string().max(100).required(),
    lastname: joi.string().max(100).required(),
    othername: joi.string().max(100).required(),
    email: joi.string().max(100).required(),
    phonenumber: joi.string().max(13).required(),
    username: joi.string().max(100).required(),
    registered: joi.string().max(100).required(),
    password: joi.string().max(20).required()
  })
  const result = schema.validate(req.body)
  if (result.error){
    res.status(400).send(result.error)

    return
  }


  const hashp = await bcrypt.hash(req.body.password, 10);
  const us = {
    id: user.length + 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    othername: req.body.othername,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    username: req.body.username,
    registered: req.body.registered,
    password: hashp,
  };

  const token = jwt.sign(us, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 604800,
  });

  try {
    user.push(us);
    res.send({
      status: 200,
      data: [
        {
          ...us,
          token,
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
export const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const us = user.find((userr) => userr.username === username);
  if (!us) res.status(404).send("incorrect username");

  const accessToken = jwt.sign(us, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 604800,
  });

  res.send({
    status: 200,
    data: [
      {
        ...us,
        accessToken,
      },
    ],
  });
};

export const getAlluser = (req, res) => {
  try {
    res.send({
      status: 200,
      data: [
      
          ...user,
        
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



export  const deleteuser = (req,res) => {
  const us = user.find((uss)=>uss.id=== parseInt(req.params.id)) ;
  if (!us) res.status(404).send ('there is no such question ')

  const index = user.indexOf(us)
  user.splice(index, 1 )

  try {
    res.send({
      status : 200 ,
      data : '  user is deleted successful'
          
      
  })
  
        
  } catch (error) {
    res.send({
      status : 'error' ,
      error : [{
        error
      }]
    })
  }
}  


export const getspecificuser = (req, res) => {
  const quest = user.find((me) => me.id === parseInt(req.params.id));
  if (!quest) res.status(404).send("that user doesnot exist");

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