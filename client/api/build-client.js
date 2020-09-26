import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      // Does not match url used in course, see below link for more info
      // https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19122264#questions/10323992
      baseURL: 'http://172.17.0.4',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
