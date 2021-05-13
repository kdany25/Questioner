import chai from 'chai'
import chaiHttp from 'chai-http'
import router from '../index.js';

import {user} from "./MochaData/Userdata"

chai.should();
chai.use(chaiHttp);


//get all users
describe ("get all user",()=>{
    it("it should get all users",(done)=>{
        chai.request(router).get('/api/v1/users').end((err,res)=>{
            res.should.have.status(200)
            res.body.data.should.be.a('array')
           
            res.body.data[0].should.have.property("firstname") 
            res.body.data[0].should.have.property("lastname")
            

            done();
        })
    })


})





//not get all user
describe ("get all user",()=>{
  it("it should get all users",(done)=>{
      chai.request(router).get('/api/v1/urs').end((err,res)=>{
          res.should.have.status(404)
          done();
      })
  })
})

//create user
describe ('create a user', ()=>{
    it(" create a user",(done)=>{
      
      chai.request(router).post('/api/v1/signup').send(user).end((err,res)=>{
        // res.should.have.status('success')
        res.body.should.be.a('object')
        res.should.have.status(200)
        res.body.data.should.be.a('array')  
        res.body.data[0].should.have.property("firstname") 
        res.body.data[0].firstname.should.equal("iyamuremye")

  
        done(); 
      })
    })
  })

//not create user

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
      chai.request(router).post('/api/v1/gnup').send(user).end((err,res)=>{
        // res.should.have.status('success')
        res.body.should.be.a('object')
        res.should.have.status(404)   
      
  
        done(); 
      })
    })
  })

  // describe ('get user by id', ()=> {
  //   it ('create a user',(done)=>{
  //    const id = 1
  // chai.request(router).get('/api/v1/specUser/'+id).end((err,res)=>{
  //   res.body.should.be.a('object')
  //   res.should.have.status(200)

  //   done();
  // })
  //   })
  // })



  //delete user
  describe ('delete user', ()=>{
    it(" have to delete a user",(done)=>{
      const id = 1
      
      chai.request(router).delete('/api/v1/user/'+id).end((err,res)=>{
        // res.should.have.status('success')
        res.body.should.be.a('object')
        res.should.have.status(200)
        res.body.should.have.property('data')
        
           
           
        done(); 
      })
    })
  })
  
  //not delete user due to 404
  describe ('delete user', ()=>{
    it(" have to delete a user",(done)=>{
      const id = 1
      
      chai.request(router).delete('/api/v1/er/'+id).end((err,res)=>{
        // res.should.have.status('success')
        res.body.should.be.a('object')
        res.should.have.status(404)

        
        
        
        done(); 
      })
    })
  })