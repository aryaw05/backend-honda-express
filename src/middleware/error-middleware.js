const errorMiddleware = (error, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.status).json({ errors: err.message });
  } else {
    res.status(500).json({ message: err.message }).end();
  }
};

export { errorMiddleware };
