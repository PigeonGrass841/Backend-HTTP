const express = require('express');
const app = express();

// enable a feature needed for POST request and add the following line of code
app.use(express.json());

app.get('/', (req,res)=> {
    res.send('Hello there');
});

const courses = [
    {id: 1, name:'Web Development'},
    {id: 2, name:'IT'},
    {id: 3, name:'Cybersecurity'},
];

// http GET requests route
app.get('/api/courses', (req, res)=> {
    res.send(courses);
});
// request course by id
app.get('/api/courses/:id', (req, res)=> {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send("The course with the given ID was not found");
    }
    res.send(course);
})
app.listen(3000, () => {
    console.log('Listening on port 3000 ...')
})

// HTTP POST Requests
app.post('/api/courses', (req,res) => {
    let name = req.body.name;
    // you write the if code here
    // add an if statement so that the name of the course you post is .min(3) characters 
    if (name.length >= 3) {
        const course = {
            // we assign an ID and a name property
            id: courses.length +1,
            name:req.body.name
        }
    }
    else {
        res.status(404).send("The course name must be at least 3 characters.");
    }
    //YOU WRITE THE NEXT LINES OF code
    // next step: push it to the array
    courses.push(course);
    // next step: the server should return the new resource to the client in the body of the response
    res.send(courses);
});

//here we need the specific id of the course we want to update
app.put('/api/courses/:id', (req,res)=> {
    //Write the code in order to look up the course, if not existing return a 404
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
    }
    //otherwise 
    else {
        //update the course
        courses[req.body.id - 1].name = req.body.name;
        //return the updated course
        res.send(courses);
    }
});

app.delete('/api/courses/:id', (req,res)=>{
    //code the following logic
    //look up the course by id
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    //return 404 if does not exist
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
    }
    else {
        //delete the course by index HINT: use the indexOf() and splice() methods
        const remove = courses.find(c=> c.id == (req.params.id));
        courses.splice(courses.indexOf(remove), 1);
        // return the response to the client the course that was deleted
        res.send(courses + "/n" + req.body.name + " was deleted.");
    }
});