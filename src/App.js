import React, {useState,useEffect} from 'react';
import './App.css';


function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
  fetch ("https://jsonplaceholder.typicode.com/photos").then((result)=>{
    result.json().then((resp)=>{
      setData(resp)
    })
  })
},[])
  return (
    <div className='App'>
      <h1>GET API CALL </h1>
      <table border={1}>
        <tr>
          <td>Album ID</td>
          <td>Album</td>
          <td>Title</td>
          <td>URL</td>
          <td>Thumbnail URL</td>
        </tr>
        {
          data.map((item)=>
          <tr>
            <td>{item.albumId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.url}</td>
            <td>{item.thumbnailUrl}</td>
          </tr>
          )
        }
      </table>
    </div>
  );
}
export default App;
