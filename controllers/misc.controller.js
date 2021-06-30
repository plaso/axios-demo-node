const axios = require('axios');

const http = axios.create({
  baseURL: 'http://localhost:8000'
});

module.exports.home = (req, res, next) => {
  res.render('home')
}

module.exports.cities = (req, res, next) => {
  http.get('/cities')
    .then((response) => {
      console.log(response.data)

      res.render('cities', { cities: response.data })
    })
    .catch(error => next(error))
}

module.exports.createCity = (req, res, next) => {
  res.render('new-city')
}

module.exports.doCreateCity = (req, res, next) => {
  // req.body
  if (!req.body.name || req.body.name.length < 2) {
    res.render('new-city', {
      city: { name: req.body.name },
      error: "Introduce a valid name"
    })
  } else {
    http.post('/cities', {
      name: req.body.name
    })
      .then(() => {
        res.redirect('/cities')
      })
      .catch(error => next(error))
  }

}

module.exports.getCity = (req, res, next) => {
  const id = req.params.id;

  http.get(`/cities/${id}`)
    .then((response) => {
      console.log(response.data)

      res.render('detail', { item: response.data })
    })
    .catch((error) => next(error))
}

module.exports.courses = (req, res, next) => {
  http.get('/courses')
    .then((response) => {
      console.log(response.data)

      res.render('courses', { courses: response.data })
    })
    .catch(error => next(error))
}

module.exports.getCourse = (req, res, next) => {
  const id = req.params.id;

  http.get(`/courses/${id}`)
    .then((response) => {
      console.log(response.data)

      res.render('detail', { item: response.data })
    })
    .catch((error) => next(error))
}