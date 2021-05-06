import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
        {
          ...user,
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