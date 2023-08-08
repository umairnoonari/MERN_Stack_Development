import React from "react";
import axios from 'axios'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserData = () => {
  const [data,setData]=useState([])
  const navigate=useNavigate()
  async function getData()
  {
    await axios.get('http://localhost:3001/auth/fetchdata',{headers:{
      "Content-Type":'application/json',
      'auth-token':localStorage.getItem("User")
    }}).then(res=>setData(res.data))

  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="row d-flex justify-content-center my-5">
      {JSON.stringify(data)}
      <div className="col-6">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((itm,index)=><tr>
            <th scope="row">{index+1}</th>
            <td>{itm.username}</td>
            <td>{itm.email}</td>
            <td>
              <button type="button" class="btn btn-warning mx-3" onClick={()=>{navigate(`/update/${itm._id}`)}}>Update</button>
              <button type="button" class="btn btn-danger" onClick={()=>{
                axios.delete("http://localhost:3001/auth/delete/"+itm._id,{headers:{
                  "Content-Type":"application/json",
                  'auth-token':localStorage.getItem("User")
                }}).then(res=>setData(res.data))
              }}>Delete</button>
            </td>
          </tr>)}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserData;
