module.exports = function(context, req) {

  var name = "World";

  if (req.query.name || (req.body && req.body.name)) {
    name = req.query.name || req.body.name;
  }

  context.res = {
    status: 200,
    body: "Hello " + name + "\n"
  };
  context.done();
};
