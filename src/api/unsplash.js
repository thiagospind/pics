import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID e014c18d67c9294a017431aef10a424d78cd8a11bc9afb8f8db2074d08d17ce1"
      }
});