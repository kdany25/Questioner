import chai from 'chai'
import chaiHttp from 'chai-http'
import router from '../index.js';

chai.should();
chai.use(chaiHttp);


//create question 


//creating user 
describe ('create question  ',()=>{
    it ("it  should create question", (done) =>{
         const me = {
            id :  2,
            createdOn: "1 january ",
            createdBy: "clet",
            meetup: "chogum",
            title: "lorem",
            body: "lorem ipsum sbdhsbasd", 
            votes: 23
         }
         chai.request(router).post("/api/v1/createquestion").send(me).end((err,res)=>{
             res.body.should.be.a('object')
             res.should.have.status(200)
             res.body.data.should.be.a('array')
             res.body.data[0].should.have.property("createdOn")
             res.body.data[0].createdOn.should.equal("1 january ")

             done();
         })
    })
})

//cant create user
describe ('create question  ',()=>{
    it ("it  should create question", (done) =>{
         const me = {
            id :  2,
            createdOn: "1 january ",
            createdBy: "clet",
            meetup: "chogum",
            title: "lorem",
            body: "lorem ipsum sbdhsbasd", 
            votes: 23
         }
         chai.request(router).post("/api/v1/createquesti").send(me).end((err,res)=>{
             res.body.should.be.a('object')
             res.should.have.status(404)
          

             done();
         })
    })
})


// get all meeting
describe ("get all question ",()=>{
    it("it should get all all question ",(done)=>{ 
        chai.request(router).get('/api/v1/questioners').end((err,res)=>{
            res.should.have.status(200)
            res.body.data[0].should.have.property("createdOn")  
            
            done();
        })
    })
}) 

// can't get all meeting
describe ("get all question ",()=>{
    it("it should get all all question ",(done)=>{ 
        chai.request(router).get('/api/v1/questione').end((err,res)=>{
            res.should.have.status(404)
           
            
            done();
        })
    })
}) 


//delete question 
describe ('delete question', ()=>{
    it(" have to delete a question",(done)=>{
      const id = 1
      
      chai.request(router).delete('/api/v1/questioner/'+id).end((err,res)=>{
        
        res.body.should.be.a('object')
        res.should.have.status(200)
        res.body.should.have.property('data')
        
        
  
        done(); 
      })
    })
  })


  //can't delete a question 
  describe ('delete question', ()=>{
    it(" have to delete a question",(done)=>{
      const id = 1
      
      chai.request(router).delete('/api/v1questioner/'+id).end((err,res)=>{
        
        res.body.should.be.a('object')
        res.should.have.status(404)
        
        
        
  
        done(); 
      })
    })
  })