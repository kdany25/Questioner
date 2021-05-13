import chai from "chai";
import chaiHttp from "chai-http";
import router from "../index.js";

import { rp } from "./MochaData/rsvpData";

chai.should();
chai.use(chaiHttp);

// create rsvp

describe("create  a rsvp  ", () => {
  it("it should create all rsvp", (done) => {
    chai
      .request(router)
      .post("/api/v1/creatersvp")
      .send(rp)
      .end((err, res) => {
        // console.log(rp)
        // console.log(res.body)
        res.body.should.be.a("object");
        res.should.have.status(200);
        res.body.data.should.be.a("array");
        res.body.data[0].should.have.property("meetup");
        res.body.data[0].meetup.should.equal(3);
        done();
      });
  });
});

// create rsvp (negative test)

describe("create  a rsvp  ", () => {
  it("it should create all rsvp", (done) => {
    const rp = {
      id: 2,
      meetup: 3,
      user: 4,
      respo: " lorem ipsumasd",
    };
    chai
      .request(router)
      .post("/api/v1/crtersvp")
      .send(rp)
      .end((err, res) => {
        res.body.should.be.a("object");
        res.should.have.status(404);

        done();
      });
  });
});

//get all rsvp

describe(" get all rsvp ", () => {
  it(" it should get all", (done) => {
    chai
      .request(router)
      .get("/api/v1/Rsvp")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a("array");

        res.body.data[0].should.have.property("meetup");
        res.body.data[0].should.have.property("user");
        done();
      });
  });
});

//cant get all rsvp

describe(" get all rsvp ", () => {
  it(" it should get all", (done) => {
    chai
      .request(router)
      .get("/api/1/Rsvp")
      .end((err, res) => {
        res.should.have.status(404);

        done();
      });
  });
});

//delete user
describe("delete user", () => {
  it(" have to delete a user", (done) => {
    const id = 1;

    chai
      .request(router)
      .delete(`/api/v1/deletersvp/${id}`)
      .end((err, res) => {
        // res.should.have.status('success')
        res.body.should.be.a("object");
        res.should.have.status(200);
        res.body.should.have.property("data");

        done();
      });
  });
});

//cant delete user
describe("delete user", () => {
  it(" have to delete a user", (done) => {
    const id = 1;

    chai
      .request(router)
      .delete(`/api/v1/delersvp/${id}`)
      .end((err, res) => {
        // res.should.have.status('success')
        res.body.should.be.a("object");
        res.should.have.status(404);

        done();
      });
  });
});
