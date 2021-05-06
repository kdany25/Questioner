import chai from 'chai'
import chaiHttp from 'chai-http'
import router from '../index.js';

chai.should();
chai.use(chaiHttp);

describe ("get all user",()=>{
    it("it should get all users",(done)=>{
        chai.request(router).get('/api/v1/users').end((err,res)=>{
            res.should.have.status(200)
            done();
        })
    })
})


describe ('create a user', ()=>{
    it(" create a user",(done)=>{
      const user = {
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
      chai.request(router).post('/auth/signup').send(user).end((err,res)=>{
        // res.should.have.status('success')
        res.body.should.be.a('object')
        
  
        done(); 
      })
    })
  })