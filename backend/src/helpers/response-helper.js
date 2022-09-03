const sendJSONResponse = (res, status, content) => {
  res.status(status).send(content);
};

export default sendJSONResponse;
