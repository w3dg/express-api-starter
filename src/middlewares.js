function notFound(req, res, next) {
  res.status(404);
  const error = new Error("🔍 Not found. " + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : "🥞",
  });
}

module.exports = {
  errorHandler,
  notFound,
};
