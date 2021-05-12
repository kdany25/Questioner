import chai from 'chai'
import chaiHttp from 'chai-http'
import router from '../index.js';

chai.should();
chai.use(chaiHttp);


//creating user 
describe ('create meeting ',()=>{
    it ("it  should create meetup", (done) =>{
         const me = {
            id :  2,
            createdOn: "12 january" ,
            location : "gisenyi" ,
            Image : "image" ,
            topic : "ferwafa" ,
            happeningOn : "15 januay" ,
            tags : "tags"
         }
         chai.request(router).post("/api/v1/createmeeting").send(me).end((err,res)=>{
             res.body.should.be.a('object')
             res.should.have.status(200)
             res.body.data.should.be.a('array')
             res.body.data[0].should.have.property("createdOn")
             res.body.data[0].createdOn.should.equal("12 january")

             done();
         })
    })
})
// not creating user 
describe ('create meeting ',()=>{
    it ("it  should create meetup", (done) =>{
         const me = {
            id :  2,
            createdOn: "12 january" ,
            location : "gisenyi" ,
            Image : "image" ,
            topic : "ferwafa" ,
            happeningOn : "15 januay" ,
            tags : "tags"
         }
         chai.request(router).post("/api/v1/creemeeting").send(me).end((err,res)=>{
             res.body.should.be.a('object')
             res.should.have.status(404)

             done();
         })
    })
})

// get all meeting
describe ("get all meeting",()=>{
    it("it should get all all meeting",(done)=>{
        chai.request(router).get('/api/v1/meetings').end((err,res)=>{
            res.should.have.status(200)
            res.body.data[0].should.have.property("createdOn") 
            res.body.data[0].should.have.property("createdOn")
            done();
        })
    })
})


// not get all meeting
describe ("get all meeting",()=>{
    it("it should get all all meeting",(done)=>{
        chai.request(router).get('/api/v1/meengs').end((err,res)=>{
            res.should.have.status(404)
            done();
        })
    })
})


//delete meeting
describe ('delete meeting', ()=>{
    it(" have to delete a user",(done)=>{
      const id = 1
      
      chai.request(router).delete('/api/v1/meeting/'+id).end((err,res)=>{
        
        res.body.should.be.a('object')
        res.should.have.status(200)
        res.body.should.have.property('data')
        
        
  
        done(); 
      })
    })
  })

  // not delete meeting
describe ('delete meeting', ()=>{
    it(" have to delete a user",(done)=>{
      const id = 1
      
      chai.request(router).delete('/api/v1/meing/'+id).end((err,res)=>{
        
        res.body.should.be.a('object')
        res.should.have.status(404)
        
        
  
        done(); 
      })
    })
  })



