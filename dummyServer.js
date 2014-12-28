function dummyServer(req, res, fetchFile) {
  if (req.url === '/') {
    res.send('It works!');
    return;
  }
  fetchFile('public' + req.url, function(err, content) {
    if (err) {
      res.status(404).send('no such file');
    } else {
      res.send(content);
    }
  });
}
