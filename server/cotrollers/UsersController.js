const User = require( "../models/UserModel.js");
// let users = []

// const updateData = () => {
//   Foo.find({}).exec().then(arr => {
//     foos = arr;
//   });
// };

// updateData();//**********INITIAL UPDATE 

module.exports.list = function list(req, res) {
  User.find({}).exec().then(arr => {
    return res.json(arr);
  });
};

module.exports.show = function show(req, res) {
  const id = req.params.id;
  User.find({id}).exec().then(arr => {
    return res.json(arr[0]);
  });
};

module.exports.create = function create(req, res) {
  const newUser = new User(
    req.body
  );
  newUser.save().then(savedItem => {
    return res.json(savedItem);
  });
};

module.exports.update = function update(req, res) {
  return res.json({id: req.params.id});
};

module.exports.remove = function remove(req, res) {  
  User.remove({id: req.params.id}).then(function (item) {
    res.send(item);
  });
};
  
