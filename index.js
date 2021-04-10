
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectMongo = require("connect-mongo");
const expressSession = require("express-session");
const cors = require('cors')

const updatePlayerId = require('./controllers/updatePlayerId')
const signupUser = require('./controllers/signupUser');
const updateBoatInfo = require('./controllers/updateBoatInfo');
const verifyVendor = require('./controllers/verifyVendor');
const loginUser = require('./controllers/loginUser');
const addWashTypeOrService = require('./controllers/addWashTypeOrService');
const updateWashTypeOrService = require('./controllers/updateWashTypeOrService');
const removeWashTypeOrService = require('./controllers/removeWashTypeOrService');
const fetchUsers = require('./controllers/fetchUsers');
const fetchWashTypeOrService = require('./controllers/fetchWashTypeOrService');
const addWash = require('./controllers/addWash');
const fetchWash = require('./controllers/fetchWash');
const acceptJob = require('./controllers/acceptJob');
const updateLocation = require('./controllers/updateLocation');
const updateWashStatus = require('./controllers/updateWashStatus');
const updateCheckupCost = require('./controllers/updateCheckupCost');
const changeName = require('./controllers/changeName');
const changePassword = require('./controllers/changePassword');
const checkIfUserExist = require('./controllers/checkIfUserExist');
const submitFeedback = require('./controllers/submitFeedback');
const getCheckupCost = require('./controllers/getCheckupCost');
const changeProfilePicture = require('./controllers/changeProfilePicture');
const fetchVendorProfile = require('./controllers/fetchVendorProfile');
const forgotPassword = require('./controllers/forgotPassword');
const cancelWash = require('./controllers/cancelWash');
const makePayment = require('./controllers/makePayment');

const app = new express();

//process.env.DB_URI
//mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, function(error){
    if(error) console.log(error);
      console.log("connection successful");
});


const mongoStore = connectMongo(expressSession);
// process.env.EXPRESS_SESSION_KEY
app.use(
  expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post('/updatePlayerId', updatePlayerId);
app.post('/signup', signupUser);
app.post('/updateBoatInfo', updateBoatInfo);
app.post('/login', loginUser)
app.get('/fetch/:requestedType', fetchWashTypeOrService)
app.post('/addWash', addWash);
app.post('/fetchWash', fetchWash);
app.get('/getCheckupCost', getCheckupCost);
app.post('/changeName', changeName);
app.post('/changePassword', changePassword);
app.post('/forgotPassword', forgotPassword);
app.post('/checkIfUserExist', checkIfUserExist)
app.post('/submitFeedback', submitFeedback);
app.post('/cancelWash', cancelWash)

app.post('/addWashTypeOrService', addWashTypeOrService);
app.post('/updateWashTypeOrService', updateWashTypeOrService);
app.post('/removeWashTypeOrService', removeWashTypeOrService);
app.post('/updateCheckupCost', updateCheckupCost)
app.get('/fetch/users/:requestedUser', fetchUsers)
app.post('/makePayment', makePayment)

app.post('/acceptJob', acceptJob)
app.post('/updateLocation', updateLocation)
app.post('/updateWashStatus', updateWashStatus);
app.post('/verifyVendor', verifyVendor)
app.post('/changeProfilePicture', changeProfilePicture);
app.post('/fetchVendorProfile', fetchVendorProfile)

app.listen(process.env.PORT || 3001, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});