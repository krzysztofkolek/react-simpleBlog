import axios from 'axios'

export default class Postservice {
  getAllPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(function (response) {
           console.log(response);
            return response;
          })
         .catch(function (error) {
            console.log(error);
          });
  }
}
