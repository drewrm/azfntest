module.exports = function(context, req) {

  var name = "World";

  if (req.query.name || (req.body && req.body.name)) {
    name = req.body.name || req.query.name;
  }

  context.res = {
    status: 200,
    body: "Hello " + name
  };
  context.done();
};
