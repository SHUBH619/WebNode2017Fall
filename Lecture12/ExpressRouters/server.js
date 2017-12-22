
const express = require('express')
    , app = express();

const routes = {
    students: require('./routes/students').route,
    teachers: require('./routes/teachers').route
};

app.get('/', (r, s) => s.send('Hello'));
//Benifit of using routes: Routes itself configures the subpaths. Student js file in required in the server which itself handles the student module
//This can be done multilevel too. E.g. creating school route and creating student and teachers subroutes inside it.
//Thus using routing we're dividing server app into sub-apps, students part of app handles everything for students and similarly for teachers.
app.use('/students', routes.students);
app.use('/teachers', routes.teachers);

app.listen(3333, () => console.log('http://localhost:3333/'));
