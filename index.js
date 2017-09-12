module.exports = function() {
  context.res = {
    status: 200,
    body: "Hello World"
  };
  context.done();
};
