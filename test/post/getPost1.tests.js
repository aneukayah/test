const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

it('Test GET All Posts', (done) => {
	chai.request('https://jsonplaceholder.typicode.com') 
	    .get('/posts') 
	    .end((err, res) => { 
		res.should.have.status(200);
		res.should.be.json;
		res.userId.should.be.a('integer');
		res.id.should.be.a('integer');
		res.title.should.be.a('string');
	//	res.body.should.be.a('string'); // Now we expected a array of objects
	//	res.body[0].should.have.property('title');// Check the propertys of the first object
	//	res.body[0].should.have.property('body'); // Check the propertys of the first object
	      done();
	    });
});