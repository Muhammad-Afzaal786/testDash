import axios from 'axios';

const postRequest = axios.create({
    baseURL: 'http://3.139.114.73:3000/api/v1/assay',
    timeout: 100000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type" : "application/json"  
     },
    
    
  });

  export default postRequest;

  

