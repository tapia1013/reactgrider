import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID _GNGYvuBZMbS-5lc5_ABcMTqWrJeW1XiDgfg0uPagbk'
  }
})



