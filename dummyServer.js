function dummyServer(req, res, fetchFile) {
  if (req.url === '/') {
    res.send('It works!');
  } else {
    res.status(404).send('Oops, not expedted');
  }
}
