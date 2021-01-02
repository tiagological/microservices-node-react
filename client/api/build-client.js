import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      // Might not match url used in course based on dev env, see below link for more info
      // https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19122264#questions/10323992
      baseURL: 'http://www.tg-ticketing-prod.xyz/',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
