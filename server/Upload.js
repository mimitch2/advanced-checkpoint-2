
const users = [{
  id: 1,
  first_name: "Adelice",
  last_name: "Keford",
  email: "akeford0@youtu.be",
  gender: "Female",
  ip_address: "167.100.249.117"
}, {
  id: 2,
  first_name: "Lyndsey",
  last_name: "Janes",
  email: "ljanes1@51.la",
  gender: "Female",
  ip_address: "223.157.58.81"
}, {
  id: 3,
  first_name: "Lindsey",
  last_name: "Heaps",
  email: "lheaps2@hud.gov",
  gender: "Female",
  ip_address: "152.240.114.70"
}, {
  id: 4,
  first_name: "Venita",
  last_name: "Bunce",
  email: "vbunce3@wsj.com",
  gender: "Female",
  ip_address: "153.23.72.62"
}, {
  id: 5,
  first_name: "Stephanie",
  last_name: "Blackaller",
  email: "sblackaller4@google.com",
  gender: "Female",
  ip_address: "80.177.170.84"
}, {
  id: 6,
  first_name: "Field",
  last_name: "Demaid",
  email: "fdemaid5@fda.gov",
  gender: "Male",
  ip_address: "178.20.53.203"
}, {
    id: 7,
    first_name: "Dalila",
    last_name: "St Angel",
    email: "dstangel6@telegraph.co.uk",
    gender: "Female",
    ip_address: "56.13.197.108"
  }, {
    id: 8,
    first_name: "Ferd",
    last_name: "Matthiesen",
    email: "fmatthiesen7@ning.com",
    gender: "Male",
    ip_address: "65.120.16.235"
  }, {
    id: 9,
    first_name: "Clarissa",
    last_name: "Quibell",
    email: "cquibell8@seesaa.net",
    gender: "Female",
    ip_address: "78.85.125.48"
  }, {
    id: 10,
    first_name: "Weber",
    last_name: "Axelby",
    email: "waxelby9@ucsd.edu",
    gender: "Male",
    ip_address: "156.70.123.199"
  }, {
    id: 11,
    first_name: "Erv",
    last_name: "Caddie",
    email: "ecaddiea@oracle.com",
    gender: "Male",
    ip_address: "150.189.178.215"
  }, {
    id: 12,
    first_name: "Bren",
    last_name: "Crossley",
    email: "bcrossleyb@utexas.edu",
    gender: "Female",
    ip_address: "188.52.238.65"
  }, {
    id: 13,
    first_name: "Nikki",
    last_name: "Statham",
    email: "nstathamc@ted.com",
    gender: "Male",
    ip_address: "105.28.152.166"
  }, {
    id: 14,
    first_name: "Aurie",
    last_name: "Dinse",
    email: "adinsed@cbc.ca",
    gender: "Female",
    ip_address: "164.134.14.36"
  }, {
    id: 15,
    first_name: "Binny",
    last_name: "Bertin",
    email: "bbertine@uiuc.edu",
    gender: "Female",
    ip_address: "155.104.182.60"
  }, {
    id: 16,
    first_name: "Ralina",
    last_name: "McDell",
    email: "rmcdellf@google.ca",
    gender: "Female",
    ip_address: "232.83.220.107"
  }, {
    id: 17,
    first_name: "Matias",
    last_name: "Chitty",
    email: "mchittyg@state.tx.us",
    gender: "Male",
    ip_address: "136.0.18.118"
  }, {
    id: 18,
    first_name: "Jefferson",
    last_name: "Truter",
    email: "jtruterh@biblegateway.com",
    gender: "Male",
    ip_address: "190.248.141.22"
  }, {
    id: 19,
    first_name: "Jeralee",
    last_name: "Stollberger",
    email: "jstollbergeri@nbcnews.com",
    gender: "Female",
    ip_address: "38.27.5.34"
  }, {
    id: 20,
    first_name: "York",
    last_name: "Mensler",
    email: "ymenslerj@mit.edu",
    gender: "Male",
    ip_address: "183.170.125.230"
  }, {
    id: 21,
    first_name: "Earl",
    last_name: "Runsey",
    email: "erunseyk@de.vu",
    gender: "Male",
    ip_address: "36.121.191.158"
  }, {
    id: 22,
    first_name: "Cristabel",
    last_name: "Rapelli",
    email: "crapellil@digg.com",
    gender: "Female",
    ip_address: "12.248.19.6"
  }, {
    id: 23,
    first_name: "Caitrin",
    last_name: "Hryniewicki",
    email: "chryniewickim@unicef.org",
    gender: "Female",
    ip_address: "95.95.83.221"
  }, {
    id: 24,
    first_name: "Kaia",
    last_name: "Aldridge",
    email: "kaldridgen@slashdot.org",
    gender: "Female",
    ip_address: "143.117.43.237"
  }, {
    id: 25,
    first_name: "Morry",
    last_name: "Polye",
    email: "mpolyeo@barnesandnoble.com",
    gender: "Male",
    ip_address: "252.221.242.195"
  }];
  


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//* *************CHANGE DB LINK BELOW ******************/
mongoose.connect("mongodb://mimitch:Bladerunner80@ds163850.mlab.com:63850/checkpoint2");
  
const User = require("./models/UsersModel.js");


users.forEach((user) => {
  const newUser = new User(user);
  newUser.save();
})
;
