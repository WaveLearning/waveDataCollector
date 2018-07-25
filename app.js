var gs = require('./lib');
var url = '/yvadher' // a random username
gs(url, function(err, data) {
  console.log(data); // or what ever you want to do with the data
})