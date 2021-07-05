const axios = require('axios');

const http = axios.create({
  baseURL: 'http://localhost:8000'
});

module.exports.home = (req, res, next) => {
  res.render('home')
}

module.exports.presents = (req, res, next) => {
  http.get('/presents')
    .then((response) => {
      res.render('presents', {
        presents: response.data
      })
    })
    .catch(error => next(error))
}

module.exports.newPresent = (req, res, next) => {
  res.render('new-present')
}

module.exports.doNewPresent = (req, res, next) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.render('new-present', {
      present: {
        name: req.body.name
      },
      error: 'Introduce a valid present'
    })
  } else {
    http.post('/presents', {
        name: req.body.name
      })
      .then((response) => {
        res.redirect('/presents')
      })
      .catch(error => next(error))
  }
}

module.exports.addPresent = (req, res, next) => {
  const id = req.params.id
  http.get(`/presents/${id}`)
    .then((response) => {
      res.render('detail', {
        item: response.data
      })
    })
    .catch(error => next(error))
}

module.exports.courses = (req, res, next) => {
  http.get('/courses')
    .then((response) => {
      res.render('courses', {
        courses: response.data
      })
    })
    .catch(error => next(error))
}

module.exports.addCourse = (req, res, next) => {
  const id = req.params.id
  http.get(`/courses/${id}`)
    .then((response) => {
      res.render('detail', {
        item: response.data
      })
    })
    .catch(error => next(error))
}