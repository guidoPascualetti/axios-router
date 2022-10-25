import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
   
  });


  export function getUsers() {
      let cancel;  
      return instance.get("/posts",  {
        cancelToken: new axios.CancelToken(function executor(c) {
        
          cancel = c;
        })
    }
        )
      
  }